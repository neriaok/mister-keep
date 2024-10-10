const { useState } = React

import { noteService } from "../services/note.service.js"

export function HeaderInput({ setNotes, setTitle }) {

    const [inputClicked, setInputClicked] = useState(null)

    function onSetInputClicked(boolean) {
        setInputClicked(boolean)
    }

    function handelTitleChange(ev) {
        setTitle(ev.target.value)
    }

    function onAddNote(type) {
        var note = {
            type: type,
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

        <section className="header-input">
            {!inputClicked
                ? <input onClick = {() => onSetInputClicked(true)} onChange={handelTitleChange} type="text" placeholder="Take a note..." className="title-input" />
                : <React.Fragment>
                    <input onChange={handelTitleChange} type="text" placeholder="Title" className="title-input" />
                    <input type="text" placeholder="Take a note..." className="take-note-input" />
                    <div className="btn-container">
                        <button onClick={() => onAddNote('video')} className="header-input-btn">🎬</button>
                        <button onClick={() => onAddNote('text')} className="header-input-btn">🖍</button>
                        <button onClick={() => onAddNote('song')} className="header-input-btn">🎼</button>
                        <button onClick={() => onAddNote('img')} className="header-input-btn">📷</button>
                        <div><button onClick = {() => onSetInputClicked(false)} >close</button></div>
                    </div>
              </React.Fragment>
}
        </section>
    )
}

