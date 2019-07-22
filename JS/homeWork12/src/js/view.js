import createNote from '../templates/notes.hbs';

export const findNoteList = document.querySelector('.note-list');

export const createNotesMarkup = (notes) => {
  const createNotesTemplate = notes.map(note => createNote(note)).join('');
  return createNotesTemplate;
} 

// const createNotesTemplate = createNotesMarkup(notesTemplate);
