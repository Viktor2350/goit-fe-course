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
    return new Promise ((resolve, reject) => {
      setTimeout (() => {
        this._notes.push(note);
        resolve(note);
      }, 300)
    })
   
  };

  deleteNote(id) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const note = this.findNoteById(id);
        if(note === id) {
          resolve(this._notes.splice(this._notes.indexOf(note), 1));
        }
      }, 300)
    })
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