import { Note } from './Note.jsx'

export function NoteList({setNotes ,notes , title , content , setTitle , setContent , onRemoveNote}) {
    console.log('noteslist',notes);
    
    return (
        <main className="notes-list" >
            {notes.map(note=>
                  <section  key={note.id}>
                    <Note setNotes={setNotes} note = {note} title = {title} content={content} setTitle = {setTitle} setContent={setContent} onRemoveNote={onRemoveNote}/>
                    </section>
            )}
        </main>
    )
}
