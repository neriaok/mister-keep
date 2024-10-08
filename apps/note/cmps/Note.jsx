import { noteService } from "../services/note.service.js"

export function Note({ note, title , setTitle }) {
    console.log(note);

    function handelTitleChange(ev){
        setTitle(ev.target.value)
       }

    var txt = title
    if (note.type == 'text') {
        return (
            <div className="text-note">
                <textarea value={txt} onChange = {handelTitleChange} placeholder="Title" name="txt"></textarea>
                <textarea placeholder="write something.." name="txt" className='main-textarea' ></textarea>
            </div>
        )
    }
    if (note.type == 'img') {
        return (
            <div className="upload-container img">
                <input onChange={noteService.uploadImg} id="file-upload" className="img-upload" type="file" accept="image/*" />
                <label htmlFor="file-upload" className="upload-label img ">📸</label>
            </div>

        )
    }

    if (note.type == 'video') {
        return (
            <div className="upload-container">
                <input onChange={noteService.uploadVideo} id="video-upload" className="video-upload" type="file" accept="video/*" />
                <label htmlFor="video-upload" className="upload-label">📹</label>
                <video id="video-preview" className="video-preview" controls></video>
            </div>

        )
    }

    if (note.type == 'song') {
        return (
            <div className="upload-container">
                <input onChange={noteService.uploadSong} id="audio-upload" className="audio-upload" type="file" accept="audio/*" />
                <label htmlFor="audio-upload" className="upload-label">🎵</label>
                <audio id="audio-preview" className="audio-preview" controls></audio>
            </div>


        )
    }
}
