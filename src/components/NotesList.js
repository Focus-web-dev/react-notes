import React from 'react';

import Note from './Note';

function NotesList({ notes, removeNote }) {

  return (
    <ul className="notes">

        {
            notes.map((note)=>(<Note key={note.id} id={note.id} text={note.text} tags={note.tags} removeNote={removeNote} />))
        }

    </ul>
  );
}

export default NotesList;
