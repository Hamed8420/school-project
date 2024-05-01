import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './lessonList.scss';

function LessonsList() {
  const [lessons, setLessons] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/lesson/allLesson/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLessons(response.data.lessons);
        console.log(response.data.lessons);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // function saveFile(filePath, fileName) {
  //   const token = localStorage.getItem('accessToken');
  //   axios({
  //     url: `http://localhost:8000/${filePath}`,
  //     method: 'GET',
  //     responseType: 'blob',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       const blob = new Blob([response.data], { type: response.headers['content-type'] });
  //       saveAs(blob, fileName);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  const handleDelete = (lessonId) => {
    axios
      .delete(`http://localhost:8000/api/lesson/deleteLesson/${lessonId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('تم حذف العنصر بنجاح');

        const updatedLessons = lessons.filter((lesson) => lesson.id !== lessonId);
        setLessons(updatedLessons);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className='home'>
      <Sidebar />
      <div className='Container'>
        <Navbar />
        <div className='table'>
          <div className='test'>
            <h2>Lessons List...</h2>
            <Link to={`/lessons/lesson/${id}/add`} className='add'>Add</Link>
          </div>

          <div className='gara'>
            {lessons.map((lesson, index) => (
              <div className='tara' key={index}>
                <h3>{lesson.id}</h3>

                {lesson.files.map((file, fileIndex) => (
  <p key={fileIndex}>
    <a
      href={`http://localhost:8000/${file.path}`}
      download={file.name}
    >
      {lesson.name}
    </a>
  </p>
))}

                <p>
                  <Link to={`/lessons/lesson/${id}/question/${lesson.id}`}>Question</Link>
                </p>

                <div className='buttons'>
                  <button onClick={() => handleDelete(lesson.id)}>delete</button>
                  <Link to={`/lessons/lesson/${id}/edites/${lesson.id}`} className='edite'>
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonsList;


