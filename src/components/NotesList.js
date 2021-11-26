import React from 'react';

import Note from './Note';

function NotesList({ notes, removeNote, editNote, removeTag }) {

  return (
    <ul className="notes">

        {
          notes.map((note)=>(<Note key={note.id} id={note.id} text={note.text} tags={note.tags} hidden={note.hidden} removeNote={removeNote} editNote={editNote} removeTag={removeTag} />))
        }

    </ul>
  );
}
 
export default NotesList;
