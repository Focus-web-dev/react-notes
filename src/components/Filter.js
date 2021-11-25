import React from 'react';

function Filter() {

  return (
    <div className="filter">

        <div className="filter-input">
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Enter tag"></input>
        </div>

        <ul className="tags">
          <li className="tag">
            <p>Tag</p>
          </li>
          <li className="tag">
            <p>TagTagTag</p>
          </li>
          <li className="tag">
            <p>TagTagTagTagTag</p>
          </li>
        </ul>

      </div>
  );
}

export default Filter;