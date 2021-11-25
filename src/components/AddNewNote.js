import React, {useState} from 'react';

function AddNewNote({ addNewNote }) {

    const [noteText, setNoteText] = useState("");
    
    function handleChange (e) {
        setNoteText(e.target.value);
    }

    function handleSave () {
        addNewNote(noteText);
        setNoteText("");
    }

  return (
    <li className="note new">

        <div className="note-content">

            <h3>Add new note</h3>

            <textarea onChange={handleChange} type="text" placeholder="Type..." value={noteText}></textarea>

        </div>

        <div className="note-footer">

            <small>200 Remaining</small>
            <button onClick={handleSave}>Save</button>

        </div>

    </li>
  );
}

export default AddNewNote;
