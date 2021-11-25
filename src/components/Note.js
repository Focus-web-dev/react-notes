import React, { useState } from 'react';
import {nanoid} from 'nanoid';

function Note({ id, text, tags, removeNote }) {

    let [tag, setTags] = useState(tags);

    function removeTag (target) {
        setTags([...tag].filter((el)=>el !== target))
    }

  return (
    <li key={id} className="note">

        <p className="note-text">{text}</p>

        <div className="note-footer">

            <ul className="tags">

                {
                    tag.map((el)=>
                        <li key={nanoid()} className="tag" onClick={()=>removeTag(el)}>
                            <p>{el}</p>
                        </li>)
                }
                
            </ul>

            <div className="buttons">

                <button className="edit">Edit</button>
                <button className="delete" onClick={()=>removeNote(id)}>Delete</button>

            </div>

        </div>

    </li>
  );
}

export default Note;
