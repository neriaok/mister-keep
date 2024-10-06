export function Note({ note }) {
    console.log(note);

    if (note.type == 'text') {
        return (
            <div className="text-note">
                <textarea name="txt" id=""></textarea>
            </div>
        )
    }
    if (note.type == 'img') {
        return (
            <div className="upload-container">
                
                <input className="img-upload" type="file" />
                <div className = "camera-img">📸</div>
                
            </div>

        )
    }

    if (note.type == 'song') {
        return (
            <p>song</p>
        )
    }
}
