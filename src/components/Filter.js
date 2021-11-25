import React, { useState } from 'react';
import {nanoid} from 'nanoid';

function Filter({ filter }) {

  let [tags, setTags] = useState([]);
  let [tagInput, setTagInput] = useState("");
  
  function handleTagInput (e) {
    setTagInput(e.target.value);
  }

  function handleAdd (tag) {
    setTags([...tags, tag]);
    setTagInput("");
    filter([...tags, tag]);
  }

  return (
    <div className="filter">

        <div className="filter-input">
          <i className='bx bx-search'></i>
          <input onChange={handleTagInput} type="text" placeholder="Enter #tag..." value={tagInput}></input>
          <button onClick={()=>handleAdd(tagInput)}>Add</button>
        </div>

        <ul className="tags">
          {
            tags.map((el)=><li key={nanoid()} className="tag"><p>{el}</p></li>)
          }
        </ul>

      </div>
  );
}

export default Filter;