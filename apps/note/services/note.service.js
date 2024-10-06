import { loadFromStorage, saveToStorage , makeId } from './utils.service.js'
import { storageService } from './async-storage.service.js'

console.log('note service');

localStorage.clear()
const NOTE_KEY = 'noteDB'
_createNotes()


export const noteService = {
   query,
   createNote,
   save,
}

function query() {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            // console.log(notes);
            return notes
        })
}

function _createNotes(){
    let notes = loadFromStorage(NOTE_KEY)
    console.log('notes');

    if (!notes || !notes.length) {
        notes = [
            createNote('text', 'write something' ),
            createNote('text', 'write something' ),
            createNote('img', 'upload' )
        ]
        
        saveToStorage(NOTE_KEY, notes)
    }
}


function createNote(type , value){
    return {
        type,
        value,
        id : makeId()
    }
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

const 