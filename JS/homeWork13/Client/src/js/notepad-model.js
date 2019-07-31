import * as api from "../services/api";

export class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  getNotes() {
    return api.getNote().then(notes => {
      this._notes = notes;
      return this._notes;
    })
  };

  findNoteById(id) {
    for (let note of this._notes) {
      if (note.id === id) return note;
    };
  }

  saveNote(note) {
    return api.saveNote(note).then(savedNote => {
      this._notes.push(savedNote);
      return savedNote;
    })
   
  };

  deleteNote(id) {
    return api.deleteNote(id).then(() => {
      this._notes = this._notes.filter(note => note.id !== id)
      return id;
    })
  };

  updateNoteContent(id, updatedContent) {
    return api.updateNote(id, updatedContent).then(updatedNoteContent => {
      const note = this.findNoteById(id);
      Object.assign(note, updatedNoteContent);
      return updatedNoteContent;
    })
  };

  updateNotePriority(id, priority) {
    return api.updateNote(id, priority).then(updatePriority => {
      const note = this.findNoteById(id);
      note.priority = updatePriority.priority;
      return note;
    })
  };

  filterNotesByQuery(query) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const newNotes = [];
        for (let note of this._notes) {
          if (note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase())) newNotes.push(note);
        }
        resolve(newNotes)
      }, 300)
    })
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