import { Note } from './Note.jsx'

export function NoteList({notes}) {
    console.log('noteslist',notes);
    
    return (
        <ul className="notes-list">
            {notes.map(note=>
                <li key={note.id}>
                  <section>
                    <Note note = {note}/>
                    </section>
                </li>
            )}
        </ul>
    )
}
