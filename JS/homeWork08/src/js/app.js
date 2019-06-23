'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

// Класс Notepad

class Notepad {
   constructor(notes = []) {
    this._notes = notes;
  }

  get Notes () {
    return this._notes;
  };

  findNoteById (id) {
    for (let note of this._notes) {
      if (note.id === id) return note;
    };
  }

  saveNote (note) {
    this._notes.push(note);
    return note;
  };

  deleteNote (id) {

    const note = this.findNoteById(id);
    this._notes.splice(this._notes.indexOf(note), 1);

  };

  updateNoteContent (id, updatedContent) {

    const note = this.findNoteById(id);
    Object.assign(note, updatedContent);
    return note;
  };

    updateNotePriority (id, priority) {
    const note = this.findNoteById(id);
    note.priority = priority;
    return note;
  };

  filterNotesByQuery (query) {
    const newNotes = [];
    for (let note of this._notes) {
      if (note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase())) newNotes.push(note);
    }
    return newNotes;
  };

  filterNotesByPriority (priority) {
    const newNotes = [];
    for (let note of this._notes) {
      if (note.priority === priority) newNotes.push(note);
    }
    return newNotes;
  };

  get notes() {
    return this._notes;
  }

}

Notepad.Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const notepad = new Notepad(initialNotes);

const noteList = document.querySelector('.note-list');

const createNoteContent = (note) => {

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


const createActionButton = () => {
  const actionButton = document.createElement('button');
  actionButton.classList.add('action');

  return actionButton;
}

const createNoteFooter = () => {

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

  const deleteI= document.createElement('i');
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


const createListItem = (note) => {
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


const renderNoteList = (listRef, notes) => {

  const noteListItem = notes.map(note => createListItem(note));
  listRef.append(...noteListItem);

}

renderNoteList(noteList, notepad.notes);