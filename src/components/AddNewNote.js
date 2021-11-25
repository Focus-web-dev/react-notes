import React from 'react';

function AddNewNote({ noteText, setNoteText, addNewNote }) {

    function handleChange (e) {
        setNoteText(e.target.value);
    }

    function handleSave () {
        addNewNote(noteText);
        setNoteText("");
    }

  return (
    <div className="add-note">

        <h3>Add new note</h3>

        <div>
            
            <input onChange={handleChange} type="text" placeholder="Type..." value={noteText}></input>
            <button onClick={()=>handleSave(noteText)}>Add</button>

        </div>

    </div>
  );
}

export default AddNewNote;
