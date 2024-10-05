export function Note({note}){
    console.log(note);
    
    if (note.type == 'text'){
        return (
        <section className="text">
            <textarea name="txt" id=""></textarea>
        </section>
    )
    } else return  <p>img</p>
    
}