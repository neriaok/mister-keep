const { useEffect, useState } = React


import { HeaderInput } from '../cmps/HeaderInput.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
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


    // var newNote = createNote('video', 'upload something')

    if (!notes || !notes.length) return <h1>loading...</h1>

    return (

        <main>
            <HeaderInput />
            <NoteList notes={notes} />
        </main>
    )
}
