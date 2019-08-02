import * as api from "../services/api";

export class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  async getNotes() {
    try {
      const notes = await api.getNote()
      this._notes = notes;
      return this._notes;
    } catch (error) {
      throw error;
    }
  };

  findNoteById(id) {
    for (let note of this._notes) {
      if (note.id === id) return note;
    };
  }

  async saveNote (note) {
    try {
      const savedNote = await api.saveNote(note);
      this._notes.push(savedNote);
      return savedNote;
    }catch (error) {
      throw error;
    }
  };

  async deleteNote (id) {
    try {
      await api.deleteNote(id);
      this._notes = this._notes.filter(note => note.id !== id)
      return id;
    }catch (error) {
      throw error;
    }
  }

 async updateNoteContent (id, updatedContent) {
   try {
     const updatedNoteContent = await api.updateNote(id, updatedContent);
     Object.assign(note, updatedNoteContent);
     return updatedNoteContent;
   }catch (error) {
    throw error;
  }
  };

 async updateNotePriority (id, priority) {
   try {
     const updatePriority = await api.updateNote(id, priority);
     const note = this.findNoteById(id);
     note.priority = updatePriority.priority;
      return note;
   } catch (error) {
    throw error;
   }
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