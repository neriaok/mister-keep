const { useEffect, useState } = React

import {NoteList} from '../cmps/NoteList.jsx'
import { TextNote } from '../cmps/Note.jsx'
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

    if (!notes || !notes.length) return <h1>loading...</h1>

    return <div>
        <NoteList notes = {notes}/>
    </div>
}
