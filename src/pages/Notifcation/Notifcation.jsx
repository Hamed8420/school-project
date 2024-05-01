import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './notifcation.scss';
import Goja from '../../img/goja.jpg';

const Notication = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    axios
      .get('http://localhost:8000/api/effectiveness/allEffectiveness', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setServices(response.data.effects);
        console.log(response.data.effects);
      })
      .catch(error => {
        console.log('حدث خطأ أثناء استدعاء البيانات:', error);
      });
  }, []);

  const formatDate = date => {
    if (date.length > 10) {
      return date.slice(0, 10);
    }
    return date;
  };

  const handleDelete = (questionId) => {
    const token = localStorage.getItem('accessToken');
    axios
      .delete(`http://localhost:8000/api/effectiveness/deleteEffectiveness/${questionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('تم حذف العنصر بنجاح');

        const updatedQuestions = services.filter((question) => question.id !== questionId);
        setServices(updatedQuestions);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="home">
      <Sidebar />
      <div className="cantan">
        <Navbar />
        <div className="class-list">
          <div className="test">
            <h2>Notifcation...</h2>
            <Link to={`/notifcation/add`} className="add">
              Add
            </Link>
          </div>
          <div className="sara">
            {services.map(service => (
              <div className="service-item" key={service.id}>
                <div className="re">
                  <img className="service-image" src={Goja} alt={service.title} />
                  <h3>{service.title}</h3>
                  <div className="tere">
                    <p>
                      <span>start:</span> {formatDate(service.startDate)}
                    </p>
                    <p>
                      <span>end:</span> {formatDate(service.endDate)}
                    </p>
                  </div>
                  <p className="tgr">
                    <span>requirment:</span> {service.description}
                  </p>
                </div>
                <div className="buttons">
                  <button onClick={() => handleDelete(service.id)}>delete</button>

                  <Link to={`/notifcation/edites/${service.id}`} className="edite">
                    Edit
                  </Link>

                  
                  <Link to={`/notifcation/order/${service.id}`} className="edite">
                    order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notication;