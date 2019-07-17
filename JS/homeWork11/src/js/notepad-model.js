export default class Notepad {
  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2
  };
  constructor(notes = []) {
    this._notes = notes;
  }

  get Notes() {
    return this._notes;
  };

  findNoteById(id) {
    for (let note of this._notes) {
      if (note.id === id) return note;
    };
  }

  saveNote(note) {
    this._notes.push(note);
    return note;
  };

  deleteNote(id) {

    const note = this.findNoteById(id);
    this._notes.splice(this._notes.indexOf(note), 1);

  };

  updateNoteContent(id, updatedContent) {

    const note = this.findNoteById(id);
    Object.assign(note, updatedContent);
    return note;
  };

  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    note.priority = priority;
    return note;
  };

  filterNotesByQuery(query) {
    const newNotes = [];
    for (let note of this._notes) {
      if (note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase())) newNotes.push(note);
    }
    return newNotes;
  };

  filterNotesByPriority(priority) {
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