const { useEffect, useState } = React

import { noteService } from "../services/note.service.js"
import { saveToStorage } from "../services/utils.service.js";

export function Note({ setNotes, note, title , content, setTitle , setContent }) {
    console.log(note);

    const [text, setText] = useState('txt')

    function handelTitleChange(ev){
        setTitle(ev.target.value)
        console.log();
        
        note.title = ev.target.value

        noteService.remove(note.id)
        noteService.save(note)
       }
       
       function handelContentChange(ev) {
        setContent(ev.target.value)
        note.content = ev.target.value
        
        noteService.remove(note.id)
        noteService.save(note)
    }

    
    if (note.type == 'text') {
        return (
            <div className="text-note">
                <textarea value={note.title} onChange = {handelTitleChange} placeholder="Title" name="txt"></textarea>
                <textarea value={note.content} onChange = {handelContentChange} placeholder="write something.." name="txt" className='main-textarea' ></textarea>
            </div>
        )
    }
    if (note.type == 'img') {
        return (
            <div className="upload-container img">
                
            </div>

        )
    }

    if (note.type == 'video') {
        return (
            <div className="upload-container">
                <video id="video-preview" className="video-preview" controls></video>
            </div>

        )
    }

    if (note.type == 'song') {
        return (
            <div className="upload-container">
                <audio id="audio-preview" className="audio-preview" controls></audio>
            </div>


        )
    }
}
