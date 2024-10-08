import { noteService } from "../services/note.service.js"

export function HeaderInput({setNotes , setTitle}) {

  function handelTitleChange(ev){
   setTitle(ev.target.value)
  }

    function onAddNote() {
        var note = {
            type: 'text',
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

    return (
        <section className ="header-input">
            <input onChange = {handelTitleChange} type="text" placeholder ="Title" className="title-input"/>
            <input type="text" placeholder ="Take a note..." className="take-note-input"/>
            <button onClick={onAddNote} className="header-input-btn">add note</button>
        </section>
    )
}

