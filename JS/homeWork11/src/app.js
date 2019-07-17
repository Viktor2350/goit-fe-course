import {Notyf} from 'notyf';
import Micromodal from 'micromodal';
import model from './js/notepad-model';
import initialNotes from './assets/notes.json';
import {createNotesMarkup} from './js/view';
import {NOTIFICATION_MESSAGES} from './js/utils/constants';
import noteTemplate from './templates/notes.hbs';
import './sass/main.scss';
import 'notyf/notyf.min.css';
import Notepad from './js/notepad-model';
const shortid = require('shortid');
const notepadModel = new model(initialNotes);

const notyf = new Notyf();

const noteList = document.querySelector('.note-list');
const noteEditor = document.querySelector('.note-editor');
const searchForm = document.querySelector('.search-form');
const formTitle = document.querySelector('input[name="note_title"]');
const formBody = document.querySelector('textarea[name="note_body"]');
const button = document.querySelector('button[data-action="open-editor"]');

const handleSubmit = event => {
  event.preventDefault();
  const newObj = {}

  if (formTitle.value === '' || formBody.value === '') {
    return notyf.error(`${NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY}`);
  }

  newObj.id = shortid.generate();
  newObj.title = formTitle.value;
  newObj.body = formBody.value;
  newObj.priority = Notepad.Priority.LOW;

  notepadModel.saveNote(newObj);
  noteEditor.reset();

  const markupNotes = createNotesMarkup(notepadModel.notes);
  noteList.innerHTML = markupNotes;
  notyf.success(`${NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS}`);
  Micromodal.close('note-editor-modal');
}


const removeListItem = (target) => {
  const parentListItem = target.closest('li');
  notepadModel.deleteNote(parentListItem.dataset.id);
  parentListItem.remove();
}

const handleDelete = (event) => {
  if(event.target.nodeName === 'I' && event.target.closest('button').dataset.action === 'delete-note'){
    removeListItem(event.target);
    notyf.success(`${NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS}`);
  }
}

const renderNoteList = (listRef, notes) => {
  const noteListItem = createNotesMarkup(notes);
  listRef.insertAdjacentHTML('beforeend', noteListItem);
}

renderNoteList(noteList, notepadModel.notes);

const handleFilter = (event) => {
  const filteredItems = notepadModel.filterNotesByQuery(event.target.value);
  const notesTemplate = createNotesMarkup(filteredItems);
  noteList.innerHTML = '';
  noteList.insertAdjacentHTML('beforeend', notesTemplate);
  
}

const openModal = () => Micromodal.show('note-editor-modal');

noteEditor.addEventListener('submit', handleSubmit);
noteList.addEventListener('click', handleDelete);
searchForm.addEventListener('input', handleFilter);
button.addEventListener('click', openModal);