import createNote from '../templates/notes.hbs';

const createNoteMarkup = note => {
  return createNote(note);
}

export const createNotesMarkup = notes => {
  return notes.map(note => createNoteMarkup(note)).join('');
};