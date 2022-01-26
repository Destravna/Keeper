import React from "react"

function Note(props){
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={(event)=>{
            event.preventDefault();
            props.deleteNote(props.index);
        }}>DELETE</button>
    </div>;
}

export default Note;