import { loadFromStorage, saveToStorage } from '../services/storage.js'
import { storageService } from './async-storage.service.js'

console.log('note service');


const NOTE_KEY = 'noteDB'
_createNotes()
query()


export const noteService = {
   query,
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
            _createNote('text', 'write something'),
            _createNote('text', 'write something')
        ]
        
        saveToStorage(NOTE_KEY, notes)
    }
}


function _createNote(type , value){
    return {
        type,
        value
    }
}

