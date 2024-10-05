export function NoteList({notes}) {
    console.log('noteslist',notes);
    
    return (
        <ul className="notes-list">
            {notes.map(notes=>
                <li key={notes.id}>
                  <section>
                    <p>{notes.type}</p>
                    <p>{notes.value}</p>
                        <button>Remove</button>
                        <button>Details</button>
                    </section>
                </li>
            )}
        </ul>
    )
}
