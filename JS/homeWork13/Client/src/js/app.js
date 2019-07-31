import {Notyf} from 'notyf';
import Micromodal from 'micromodal';
import {Notepad} from './notepad-model';
import {createNotesMarkup} from './view';
import {NOTIFICATION_MESSAGES, PRIORITY_TYPES, NOTE_ACTIONS} from './utils/constants';
import '../sass/main.scss';
import 'notyf/notyf.min.css';

const notepadModel = new Notepad();

const notyf = new Notyf();

const noteList = document.querySelector('.note-list');
const noteEditor = document.querySelector('.note-editor');
const searchForm = document.querySelector('.search-form');
const formTitle = document.querySelector('input[name="note_title"]');
const formBody = document.querySelector('textarea[name="note_body"]');
const button = document.querySelector('button[data-action="open-editor"]');

notepadModel.getNotes()
.then(() => {
  const markupNotes = createNotesMarkup(notepadModel.notes);
  noteList.innerHTML = markupNotes;
})

const openModal = () => Micromodal.show('note-editor-modal');

const handleSubmit = event => {
  event.preventDefault();
  const newObj = {}
  newObj.title = formTitle.value;
  newObj.body = formBody.value;
  newObj.priority = PRIORITY_TYPES.LOW;

  if (formTitle.value === '' || formBody.value === '') {
    return notyf.error(`${NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY}`);
  }

notepadModel
.saveNote(newObj)
.then(() => {
  noteEditor.reset();
  const markupNotes = createNotesMarkup(notepadModel.notes);
  noteList.innerHTML = markupNotes;
  notyf.success(`${NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS}`);
  Micromodal.close('note-editor-modal');
})
.catch(error => notyf.error(`${error}`))
  return
}

const removeListItem = ({target}) => {
  const parentListItem = target.closest('.note-list__item');
  notepadModel.deleteNote(parentListItem.dataset.id)
  .then(() => {
    const markupNotes = createNotesMarkup(notepadModel.notes);
    noteList.innerHTML = markupNotes;
  })
  .catch(error => notyf.error(`${error}`));
  parentListItem.remove();
}

const handleDelete = ({target}) => {
  if (target.parentNode.nodeName !== 'BUTTON') return;
  const action = target.parentNode.dataset.action;

    switch(action){
      case NOTE_ACTIONS.DELETE:
        removeListItem(event);
        notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
        break;
    }
}

const renderNoteList = (listRef, notes) => {
  const noteListItem = createNotesMarkup(notes);
  listRef.insertAdjacentHTML('beforeend', noteListItem);
}

renderNoteList(noteList, notepadModel.notes);

const handleFilter = (event) => {
  notepadModel.filterNotesByQuery(event.target.value)
  .then((filteredItems) => {
    const notesTemplate = createNotesMarkup(filteredItems);
    noteList.innerHTML = notesTemplate;
  })
}


const handleClickEditBtn = event => {
  if (
    event.target.nodeName === "I" &&
    event.target.closest("button").dataset.action === "edit-note"
  ) {
    MicroModal.show("note-editor-modal");
    const editedNote = notepadModel.findNoteById(
      event.target.closest("li").dataset.id
    );
    noteEditor.elements[0].value = editedNote.title;
    noteEditor.elements[1].value = editedNote.body;
    noteEditor.dataset.editedNoteId = editedNote.id;
  }
};

noteEditor.addEventListener('submit', handleSubmit);
noteList.addEventListener('click', handleDelete);
searchForm.addEventListener('input', handleFilter);
button.addEventListener('click', openModal);
noteList.addEventListener('click', handleClickEditBtn);