import { Note } from './Note.jsx'

export function NoteList({notes , title , setTitle}) {
    console.log('noteslist',notes);
    
    return (
        <main className="notes-list" >
            {notes.map(note=>
                  <section  key={note.id}>
                    <Note  note = {note} title = {title} setTitle = {setTitle}/>
                    </section>
            )}
        </main>
    )
}
