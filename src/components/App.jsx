import React, {useState} from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){
    let [notes, setNotes] = useState([]);
    let currentIndex = notes.length;

    function addNote(newItem){
        setNotes(prevVal=>{
            return [...prevVal, newItem];
        })
        
    }

    function deleteNote(id){
        setNotes((prevVal)=>{
            return prevVal.filter((element, index)=>{
                return index !== id;
            })
        })
    }


    //console.log(notes);
    return <div>
        {console.log(notes)}
        <Heading></Heading>
        <CreateArea click = {addNote} index = {currentIndex} />
        {notes.map((note)=>{
            return (
                <Note
                    key = {note.key} 
                    title = {note.title}
                    content = {note.content}
                    index = {note.index}
                    deleteNote = {deleteNote}
                />
            )
        })}
        <Footer></Footer>
    </div>;
}

export default App;