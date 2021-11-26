import React from 'react';
import {nanoid} from 'nanoid';

function Note({ id, text, tags, hidden, removeNote, editNote, removeTag }) {

    return (
        <li key={id} className={hidden === false ? "note" : "note hidden"}>
    
            <div className="note-content">
    
                <p className="note-text">
                    {text}
                </p>
    
                <ul className="tags">
    
                    {
                        tags.map((el)=><li key={nanoid()} className="tag" onClick={()=>removeTag(text, id, el, tags)}><p>{el}</p></li>)
                    }
                        
                </ul>
    
            </div>
            
            <i className='bx bx-edit-alt' onClick={()=>editNote(id, tags)}></i>
            <i className='bx bx-trash' onClick={()=>removeNote(id)}></i>
    
        </li>
    );
}

export default Note;
