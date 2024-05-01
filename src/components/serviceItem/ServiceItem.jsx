import React from 'react';
import { Link } from 'react-router-dom';
const ServiceItem = ({ name, image}) => {
  return (
    <div className='yara' >
      <img  className='jara' src={image} alt={name} />
      <h3>{name}</h3>
      
      <div className='buttons'>
        <button>delete</button>
        <Link to={`/service/edites`} className='edite'>Edit</Link>
      </div>
    </div>
  );
};

export default ServiceItem;