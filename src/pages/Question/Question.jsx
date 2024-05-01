import React, { useEffect, useState } from 'react';
import './question.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Question() {
  const { id, lessonId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await axios.get(`http://localhost:8000/api/question/AllQuestion/Lesson/${lessonId}`, config);
        setQuestions(response.data.questions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [lessonId]);

  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const handleDelete = (questionId) => {
    axios
      .delete(`http://localhost:8000/api/question/deleteQuestion/${questionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('تم حذف العنصر بنجاح');

        const updatedQuestions = questions.filter((question) => question.id !== questionId);
        setQuestions(updatedQuestions);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (questionId) => {
    const answerId = selectedAnswers[questionId];
    if (answerId) {
      const data = {
        answer: {
          question: questionId,
          answer: answerId
        }
      };
      console.log(data);

      axios
        .post('http://localhost:8000/api/question/chooseLessonAnswer', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('حدث خطأ أثناء إرسال الإجابة', error);
        });
    } else {
      console.log('يرجى اختيار إجابة');
    }
  };

  const handleRadioChange = (questionId, answerId) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: answerId
    }));
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='cantane'>
        <Navbar />

        <div className="cantano">
          <div className="adde ">
            <Link to={`/lessons/lesson/${id}/question/${lessonId}/adde`} className='add'>Add Question</Link>
          </div>
          <p className="gtr">Data has been added successfully</p>
          <h2>Questions About the lesson</h2>
          <div className="header">
            {questions.map((question) => (
              <div className="question" key={question.id}>
                <h3>{question.title}<span>{question.mark}</span></h3>
                <div className="options">
                  {shuffle(question.answers).map((option, index) => (
                    <div className="option" key={index}>
                      <input
                        type="radio"
                        className="answer"
                        checked={selectedAnswers[question.id] === option.id}
                        onChange={() => handleRadioChange(question.id, option.id)}
                      />
                      <label>{option.answer}</label>
                    </div>
                  ))}
                </div>

                <div className='buttons'>
                  <button onClick={() => handleDelete(question.id)}>delete</button>
                  <Link to={`/lessons/lesson/${id}/question/${lessonId}/edits/${question.id}`} className='edite'>Edit</Link>

                  <button onClick={() => handleSubmit(question.id)} className='send'>Send</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;