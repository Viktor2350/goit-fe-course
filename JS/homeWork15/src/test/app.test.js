const expect = require('chai').expect;
import Notepad from '../testWork/app';

const initialNotes = [
    {
      id: "id-1",
      title: "JavaScript essentials",
      body:
        "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
      priority: Notepad.Priority.HIGH
    },
    {
      id: "id-2",
      title: "Refresh HTML and CSS",
      body:
        "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
      priority: Notepad.Priority.NORMAL
    }
  ];

describe('Notepad test', function() {
    it('should has initial notes', function() {
        const notepad = new Notepad(initialNotes);
        expect(notepad.notes).equal(initialNotes);
    })

    it('saved id-3', () => {
        const notepad = new Notepad(initialNotes);
        notepad.saveNote({
            id: 'id-3',
            title: 'Get comfy with Frontend frameworks',
            body:
              'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
            priority: Notepad.Priority.NORMAL,
          });
    })

    it('saved id-4', () => {
        const notepad = new Notepad(initialNotes);
        notepad.saveNote({
            id: 'id-4',
            title: 'Winter clothes',
            body:
              "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
            priority: Notepad.Priority.LOW,
          });
    })

    it('should has initial notes', function() {
        const notepad = new Notepad(initialNotes);
        expect(notepad.notes).equal(initialNotes);
    })

    it('update priority', () => {
        const notepad = new Notepad(initialNotes);
        notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL)
        expect(notepad.notes).equal(initialNotes);
    })

    it('update to low', () => {
        const notepad = new Notepad(initialNotes);
        notepad.updateNotePriority('id-3', Notepad.Priority.LOW)
        expect(notepad.notes).equal(initialNotes);
    })

    it('filter notes', () => {
        const notepad = new Notepad(initialNotes);
        notepad.filterNotesByQuery('html');
        expect(notepad.notes).equal(initialNotes);
    })

    it('filter notes', () => {
        const notepad = new Notepad(initialNotes);
        notepad.filterNotesByQuery('javascript');
        expect(notepad.notes).equal(initialNotes);
    })

    it('filtred notes by normal priority', () => {
        const notepad = new Notepad(initialNotes);
        notepad.filterNotesByPriority(Notepad.Priority.NORMAL);
        expect(notepad.notes).equal(initialNotes);
    })

    it('update content id-3', () => {
        const notepad = new Notepad(initialNotes);
        notepad.updateNoteContent('id-3', {
            title: 'Get comfy with React.js or Vue.js',
          })
        expect(notepad.notes).equal(initialNotes);
    })

    it('delete id-2', () => {
        const notepad = new Notepad(initialNotes);
        notepad.deleteNote('id-2');
        expect(notepad.notes).equal(initialNotes);
    })
    
})