import { loadFromStorage, saveToStorage, makeId } from './utils.service.js'
import { storageService } from './async-storage.service.js'

console.log('note service');

// localStorage.clear()
const NOTE_KEY = 'noteDB'
_createNotes()


export const noteService = {
    query,
    _createNote,
    save,
    remove,
    uploadImg,
    uploadVideo,
    uploadSong,
}

function query() {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            // console.log(notes);
            return notes
        })
}

function _createNotes() {
    let notes = loadFromStorage(NOTE_KEY)
    console.log('notes');

    if (!notes || !notes.length) {
        notes = []

        saveToStorage(NOTE_KEY, notes)
    }
}


function _createNote(type, value) {
    return {
        type,
        value,
        id: makeId()
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

function uploadImg() {
    console.log('upload');
    const upload = document.querySelector(".upload-container.img")
    console.log(upload);

    const input = document.querySelector(".img-upload")
    const reader = new FileReader();
    console.log(reader);

    reader.readAsDataURL(input.files[0]);
    
        
        reader.onload = () => {
            const base64Img = reader.result;
    
            localStorage.setItem('uploadedImg', base64Img);
    
            console.log('Image uploaded and saved to local storage!');
        };
    
        reader.onerror = (err) => console.error('Image upload failed:', err);
    }
    




function uploadVideo(event) {
    const input = event.target;
    const file = input.files[0];
    const videoPreview = document.querySelector(".video-preview");

    if (file) {
        const videoURL = URL.createObjectURL(file); // Create a local URL for the uploaded video
        localStorage.setItem('uploadedVideo', videoURL);
    
        console.log('video uploaded and saved to local storage!');
    };

    reader.onerror = (err) => console.error('video upload failed:', err);
    }



function uploadSong(event) {
    const input = event.target;
    const file = input.files[0];
    const audioPreview = document.querySelector("#audio-preview");

    if (file) {
        const audioURL = URL.createObjectURL(file); // Create a URL for the audio file
        audioPreview.src = audioURL; // Set the audio element's source to the uploaded song
        audioPreview.style.display = 'block'; // Show the audio player
    }
}

