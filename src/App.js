import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';

import Filter from './components/Filter';
import NotesList from './components/NotesList';
import AddNewNote from './components/AddNewNote';

function App() {
  
  let [tags, setTags] = useState("");

  let [notes, setNotes] = useState([
    {
      id: nanoid(),
      tags: ['#shop', '#money'],
      text: "Go shopping. Don't forget to take money",
      hidden: false
    },

    {
      id: nanoid(),
      tags: ['#bills', '#money'],
      text: "Pay bills",
      hidden: false
    },

    {
      id: nanoid(),
      tags: ['#shop', '#cat-food'],
      text: "Buy cat food",
      hidden: false
    },

  ]);

  function addNewNote(text, id=nanoid()) {
    removeFilter();

    let newNote = {
      id: id,
      tags: text.split(' ').filter((el) => el[0] === '#'),
      text: text.split(' ').filter((el)=> el[0] !== '#').join(' '),
      hidden: false
    }

    setNotes([...notes, newNote]);
  }

  function removeTag (text, id, tag) {
    removeFilter();

    let currentNote = notes.find((el) => el.id === id);
    let currentTagList = currentNote.tags;
    let newTagList = currentTagList.filter((el)=>el!==tag)

    let updatedNote = {
      id: id,
      tags: newTagList,
      text: text,
      hidden: false
    }

    setNotes([...notes.filter((el) => el.id !== id), updatedNote]);
  }

  function removeNote (id) {
    setNotes(notes.filter((el) => el.id !== id));
  }

  const [noteText, setNoteText] = useState("");

  function editNote (id, tagList) {
    setNotes(notes.filter((el) => el.id !== id));
    let currentNote = notes.find((el) => el.id === id);
    setNoteText(currentNote.text + ` ${tagList.join(' ')}`);
  }

  function filter (tag = [tags]) {

    console.log(tag);

    notes.map((el)=>el.tags.includes(tag) ? el.hidden = false : el.hidden = true);

    setNotes([...notes]);
  }

  function removeFilter () {
    setTags("");
    notes.map((el)=>el.hidden === true ? el.hidden = false : el.hidden);
    setNotes([...notes]);
  }

  useEffect(() => {
    let savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }

  }, []);

  useEffect(() => {
    notes.map((el)=>el.hidden=false);
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  return (
    <div className="App">
      <h1>React notes</h1>

      <Filter filter={filter} tags={tags} setTags={setTags} removeFilter={removeFilter} />

      <NotesList notes={notes} removeNote={removeNote} editNote={editNote} removeTag={removeTag} />

      <AddNewNote noteText={noteText} setNoteText={setNoteText} addNewNote={addNewNote}/>

    </div>
  );
}

export default App;
