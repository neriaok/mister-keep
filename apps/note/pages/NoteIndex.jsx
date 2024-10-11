const { useEffect, useState } = React


import { HeaderInput } from '../cmps/HeaderInput.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
import { noteService } from "../services/note.service.js"


export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [title, setTitle] = useState('Title')
    const [content, setContent] = useState('Content')




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

    function onRemoveNote(noteId) {
        noteService.remove(noteId)
            .then(() => {
                setNotes(notes => notes.filter(note => note.id !== noteId))
            })
            .catch(err => {
                console.log('Problems removing note:', err)
            })
    }



    if (!notes || !notes.length) {
        return (
            <main>
                <HeaderInput setNotes={setNotes} setTitle={setTitle} setContent={setContent} title = {title} content={content}/>
                <div className = "msg-container">
                    <h3>Notes you add appear here</h3>
                </div>
            </main>

        )
    }

    return (

        <main className = "main-container">
            <HeaderInput setNotes={setNotes} setTitle={setTitle} setContent={setContent} title = {title} content={content} />
            <NoteList setNotes={setNotes} notes={notes} title={title} content={content} setTitle={setTitle} setContent={setContent} onRemoveNote = {onRemoveNote} />
        </main>
    )
}
