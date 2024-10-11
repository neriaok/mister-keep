const { useState } = React

import { noteService } from "../services/note.service.js"
import { makeId } from "../services/utils.service.js"

export function HeaderInput({ setNotes, setTitle , setContent , title , content}) {

    const [inputClicked, setInputClicked] = useState(null)

    function onSetInputClicked(boolean) {
        setInputClicked(boolean)
    }

    function handelTitleChange(ev) {
        setTitle(ev.target.value)
    }

    function handelContentChange(ev) {
        setContent(ev.target.value)
    }

    function onAddNote(type) {
            var note = {
                type: type,
                title: `${title}`,
                content: `${content}`
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
                ? <input onClick={() => onSetInputClicked(true)} onChange={handelTitleChange} type="text" placeholder="Take a note..." className="first-title-input" />
                : <React.Fragment>
                    <input onChange={handelTitleChange} type="text" placeholder="Title" className="title-input" />
                    <label className="catch-note-label">📌</label>

                    <input onChange={handelContentChange}  type="text" placeholder="Take a note..." className="take-note-input" />

                    <div className="lables-container">
                        <input onChange={noteService.uploadVideo} id="video-upload" className="video-upload" type="file" accept="video/*" />
                        <label htmlFor="video-upload" onClick={() => onAddNote('video')} className="upload-label">🎬</label>

                        <label onClick={() => onAddNote('text')} className="header-input-btn">🖍</label>

                        <input onChange={noteService.uploadSong} id="audio-upload" className="audio-upload" type="file" accept="audio/*" />
                        <label htmlFor="audio-upload" onClick={() => onAddNote('song')} className="upload-label">🎼</label>

                        <input onChange={noteService.uploadImg} id="file-upload" className="img-upload" type="file" accept="image/*" />
                        <label htmlFor="file-upload" onClick={() => onAddNote('img')} className="upload-label img ">📷</label>

                    </div>

                    <button onClick={() => onSetInputClicked(false)} >close</button>


                </React.Fragment>
            }
        </section>
    )
}

