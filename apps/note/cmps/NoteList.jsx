import { Note } from './Note.jsx'

export function NoteList({notes}) {
    console.log('noteslist',notes);
    
    return (
        <main className="notes-list" >
            {notes.map(note=>
                  <section  key={note.id}>
                    <Note note = {note}/>
                    </section>
            )}
        </main>
    )
}
