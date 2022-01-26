import React, {useState} from "react";


function CreateArea(props) {
    let count = -1;
   
    let[newItem, setNewItem] = useState({key:count, title :"", content:" ", index : count});
    
    function handleChange(event){
        
        const {name, value} = event.target;
        //console.log("n = " + n);
        if(name === "title"){
            setNewItem(prevVal=>{
                return {
                    key : props.index,
                    title : value,
                    content : prevVal.content,
                    index : props.index
                }
            })  
        }
        else{
            setNewItem(prevVal=>{
                return{
                    ...prevVal,
                    [name] : value
                }
            })
        }
        count += 1;
        //console.log(newItem);
        //console.log(props.click);
    }

    return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value = {newItem.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value = {newItem.content} />
        <button onClick={(event)=>{
            event.preventDefault();
            props.click(newItem);
            setNewItem({key:count, title :"", content:" ", index: count});
            }}>
                Add
            </button>
      </form>
    </div>
  );
}

export default CreateArea;
