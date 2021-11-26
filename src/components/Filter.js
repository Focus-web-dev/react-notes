import React, { useState } from 'react';
import {nanoid} from 'nanoid';

function Filter({ filter, tags, setTags, removeFilter }) {

  // let [tags, setTags] = useState([]);
  let [tagInput, setTagInput] = useState("");
  
  function handleTagInput (e) {
    setTagInput(e.target.value);
  }

  function handleSearch (tagInput) {
    setTags(tagInput);
    setTagInput("");
    filter(tagInput);
  }

  if (tags !== "") {
    return (
      <div className="filter">

        <div className="filter-input">
          <i className='bx bx-search'></i>
          <input onChange={handleTagInput} type="text" placeholder="Enter #tag..." value={tagInput}></input>
          <button onClick={()=>handleSearch(tagInput)}>Search</button>
        </div>

        <div key={nanoid()} onClick={removeFilter} className="tag">
          <p>{tags}</p>
        </div>

      </div>
    );
  }
  else {
    return (
      <div className="filter">

        <div className="filter-input">
          <i className='bx bx-search'></i>
          <input onChange={handleTagInput} type="text" placeholder="Enter #tag..." value={tagInput}></input>
          <button onClick={()=>handleSearch(tagInput)}>Search</button>
        </div>

      </div>
    );
  }
}

export default Filter;