
import model from './js/notepad-model';
import initialNotes from './assets/notes.json';
import {createListItem, renderNoteList} from './js/view';
import {PRIORITY_TYPES} from './js/utils/constants';

const shortid = require('shortid');
const notepadModel = new model(initialNotes);

const noteList = document.querySelector('.note-list');
const noteEditor = document.querySelector('.note-editor');
const searchForm = document.querySelector('.search-form');
const formTitle = document.querySelector('input[name="note_title"]');
const formBody = document.querySelector('textarea[name="note_body"]');

renderNoteList(noteList, notepadModel.notes);

const handleSubmit = event => {
  event.preventDefault();
  const newObj = {}

  if (formTitle.value === '' || formBody.value === '') {
    alert('Необходимо заполнить все поля!');
  }

  newObj.id = shortid.generate();
  newObj.title = formTitle.value;
  newObj.body = formBody.value;
  newObj.priority = PRIORITY_TYPES.LOW;

  notepadModel.saveNote(newObj);
  noteEditor.reset();

  addListItem(noteList, newObj);

}

const removeListItem = (target) => {
  const parentListItem = target.closest('li');
  notepadModel.deleteNote(parentListItem.dataset.id);
  parentListItem.remove();
}

const handleDelete = (event) => {
  if(event.target.nodeName === 'I' && event.target.closest('button').dataset.action === 'delete-note'){
    removeListItem(event.target);
  }
}

const handleFilter = (event) => {
  const filteredItems = notepadModel.filterNotesByQuery(event.target.value);
  renderNoteList(noteList, filteredItems);
}

const addListItem = (listRef, note) => {
  const listItem = createListItem(note);
  listRef.appendChild(listItem);
}

noteEditor.addEventListener('submit', handleSubmit);
noteList.addEventListener('click', handleDelete);
searchForm.addEventListener('input', handleFilter);
