// export default class View {
//   constructor() {
//     this._body = document.querySelector('body');
//   }
// }

import {NOTE_ACTIONS, ICON_TYPES} from './utils/constants';

export const createNoteContent = (note) => {

  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = note.title;

  const noteBody = document.createElement('p');
  noteBody.classList.add('note__body');
  noteBody.textContent = note.body;

  noteContent.append(noteTitle, noteBody);
  return noteContent;
}


export const createActionButton = () => {
  const actionButton = document.createElement('button');
  actionButton.classList.add('action');

  return actionButton;
}

export const createNoteFooter = () => {

  const noteFooter = document.createElement('footer');
  noteFooter.classList.add('note__footer');

  const noteSection = document.createElement('section');
  noteSection.classList.add('note__section');

  const decreasePriority = createActionButton();
  decreasePriority.dataset.action = NOTE_ACTIONS.DECREASE_PRIORITY;

  const materialIcons = document.createElement('i');
  materialIcons.classList.add('material-icons', 'action__icon');
  materialIcons.textContent = ICON_TYPES.ARROW_DOWN;

  const increasePriority = createActionButton();
  increasePriority.dataset.action = NOTE_ACTIONS.INCREASE_PRIORITY;

  const actionIcon = document.createElement('i');
  actionIcon.classList.add('material-icons', 'action__icon');
  actionIcon.textContent = ICON_TYPES.ARROW_UP;

  const notePriority = document.createElement('span');
  notePriority.classList.add('note__priority');
  notePriority.textContent = 'Priority: Low';

  const section = document.createElement('section');
  section.classList.add('note__section');

  const editNote = createActionButton();
  editNote.dataset.action = NOTE_ACTIONS.EDIT;

  const edit = document.createElement('i');
  edit.classList.add('material-icons', 'action__icon');
  edit.textContent = ICON_TYPES.EDIT;

  const deleteNote = createActionButton();
  deleteNote.dataset.action = NOTE_ACTIONS.DELETE;

  const deleteI = document.createElement('i');
  deleteI.classList.add('material-icons', 'action__icon');
  deleteI.textContent = ICON_TYPES.DELETE;

  //append

  decreasePriority.appendChild(materialIcons);

  increasePriority.appendChild(actionIcon);

  noteSection.append(decreasePriority, increasePriority, notePriority)

  editNote.appendChild(edit);

  deleteNote.appendChild(deleteI);
  section.append(editNote, deleteNote);

  noteFooter.append(noteSection, section);

  return noteFooter;

}

export const createListItem = (note) => {
  const noteListItem = document.createElement('li');
  noteListItem.classList.add('note-list__item');
  noteListItem.dataset.id = note.id;

  const createNote = document.createElement('div');
  createNote.classList.add('note');

  const divContent = createNoteContent(note);

  const footerContent = createNoteFooter(note);

  createNote.append(divContent, footerContent);

  noteListItem.appendChild(createNote);

  return noteListItem;

}

export const renderNoteList = (listRef, notes) => {

  const noteListItem = notes.map(note => createListItem(note));
  listRef.innerHTML = '';
  listRef.append(...noteListItem);

}