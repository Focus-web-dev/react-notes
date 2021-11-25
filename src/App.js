import React, {useState} from 'react';
import {nanoid} from 'nanoid';

import Filter from './components/Filter';
import NotesList from './components/NotesList';
import AddNewNote from './components/AddNewNote';

function App() {

  let [notes, setNotes] = useState([
    {
      id: nanoid(),
      tags: ['#1', '#2', '#3'],
      text: 'Hello'
    }
  ]);

  function addNewNote(text, id=nanoid()) {
    let newNote = {
      id: id,
      tags: text.split(' ').filter((el) => el[0] === '#'),
      text: text.split(' ').filter((el)=> el[0] !== '#').join(' ')
    }

    setNotes([...notes, newNote]);
  }

  function removeTag (text, id, tag) {

    let currentNote = notes.find((el) => el.id === id);
    let currentTagList = currentNote.tags;
    let newTagList = currentTagList.filter((el)=>el!==tag)

    let updatedNote = {
      id: id,
      tags: newTagList,
      text: text
    }
    setNotes([...notes.filter((el) => el.id !== id), updatedNote]);
    
  }

  function removeNote (id) {
    setNotes(notes.filter((el) => el.id !== id));
  }

  const [noteText, setNoteText] = useState("");

  function editNote (id, tags) {
    setNotes(notes.filter((el) => el.id !== id));
    let currentNote = notes.find((el) => el.id === id);
    setNoteText(currentNote.text + ` ${tags.join(' ')}`);
  }

  function filter (tags) {
    tags.map((el)=>console.log(notes.map((ell)=>[ell.tags].includes(el))));
  }

  return (
    <div className="App">
      <h1>React notes</h1>

      <Filter filter={filter}/>

      <NotesList notes={notes} removeNote={removeNote} editNote={editNote} removeTag={removeTag} />

      <AddNewNote noteText={noteText} setNoteText={setNoteText} addNewNote={addNewNote}/>

    </div>
  );
}

export default App;
