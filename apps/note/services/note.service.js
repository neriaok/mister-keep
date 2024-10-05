import { loadFromStorage, saveToStorage , makeId } from './utils.service.js'
import { storageService } from './async-storage.service.js'

console.log('note service');


const NOTE_KEY = 'noteDBN'
_createNotes()


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
            _createNote('text', 'write something' , '1'),
            _createNote('text', 'write something' , '2')
        ]
        
        saveToStorage(NOTE_KEY, notes)
    }
}


function _createNote(type , value){
    return {
        type,
        value,
        id : makeId()
    }
}

