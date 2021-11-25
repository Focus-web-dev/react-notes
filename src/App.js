import React, {useState} from 'react';
import {nanoid} from 'nanoid';

import Filter from './components/Filter';
import AddNewNote from './components/AddNewNote';
import NotesList from './components/NotesList';

function App() {

  let [notes, setNotes] = useState([]);

  function addNewNote(text) {
    let newNote = {
      id: nanoid(),
      tags: text.split(' ').filter((el) => el[0]==='#'),
      text: text.split(' ').filter((el)=> el[0]!=='#').join(' ')
    }

    setNotes([...notes, newNote]);
  }

  function removeNote (id) {
    setNotes(notes.filter((el) => el.id !== id));
  }

  return (
    <div className="App">
      <h1>React notes</h1>
      <Filter />

      <NotesList notes={notes} addNewNote={addNewNote} removeNote={removeNote}/>
      <AddNewNote addNewNote={addNewNote}/>

    </div>
  );
}

export default App;
