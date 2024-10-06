const { useEffect, useState } = React

import {NoteList} from '../cmps/NoteList.jsx'
import { noteService } from "../services/note.service.js"


export function NoteIndex() {

    const [notes, setNotes] = useState(null)

    
    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query()
        .then((loadedNotes) => {
            console.log('notes loaded:', loadedNotes);
            setNotes(loadedNotes);
        })
            .catch(err => {
                console.log('Problems getting notes:', err)
            }) 
    }

    // function onRemoveNote(noteId) {
    //     noteService.remove(noteId)
    //         .then(() => {
    //             setNotes(notes => notes.filter(note => note.id !== noteId))
    //         })
    //         .catch(err => {
    //             console.log('Problems removing note:', err)
    //         })
    // }

    function onAddNote() {
        var note = {
            type:'text',
            value: 'upload'
        }
    
        noteService.save(note)
            .then(() => {
                console.log(note);
                
                // Fetch the updated notes from the service or update the state
                setNotes(prevNotes => [...prevNotes, note]);
            })
            .catch(err => {
                console.log('Problems adding note:', err);
            });
    }
    
    // var newNote = createNote('video', 'upload something')

    if (!notes || !notes.length) return <h1>loading...</h1>

    return <div>
        <button onClick={onAddNote}>add note</button>
        <NoteList notes = {notes}/>
    </div>
}
