import React from 'react';
import { Link } from 'react-router-dom';

function ClassItem({ name, section, teacher }) {
  return (
    <div className='tere'>
      <h2>{name}</h2>
     <div className='par'>
     <p>{section}</p>
      <p>{teacher}</p>
     </div>
     <div className='buttons'>
        <button>delete</button>
        <Link to={`/classes/edites`} className='edite'>Edit</Link>
      </div>
    </div>
  );
}

export default ClassItem;