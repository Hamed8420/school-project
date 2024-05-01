import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

// import './addQuestion.scss';

const AddQuestionSub = () => {
  const [question, setQuestion] = useState('');
  const [rightAnswer, setRightAnswer] = useState('');
  const [wrongAnswer1, setWrongAnswer1] = useState('');
  const [wrongAnswer2, setWrongAnswer2] = useState('');
  const [wrongAnswer3, setWrongAnswer3] = useState('');
  const [mark, setMark] = useState('');

  const { idsubject } = useParams(); 

  const handleAddQuestion = () => {
    const token = localStorage.getItem('accessToken'); 

    const data = {
      text: question,
      rightAnswer: rightAnswer,
      answers: [wrongAnswer1, wrongAnswer2, wrongAnswer3],
      mark:mark
    };

    axios.post(`http://localhost:8000/api/question/addQuestion/Subjects/${idsubject}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);

      })
      .catch(error => {
        console.error(error);

      });
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='cantanq'>
        <Navbar />

        <div className='addstudent'>
          <h2>Add Question</h2>

          <div className='gtr'>
            <div className='te'>
              <p>please enter text of question</p>
              <input type="text" className='tgr' value={question} onChange={e => setQuestion(e.target.value)} />
            </div>
            <div className=' te right'>
              <p>please enter right answer</p>
              <input type="text" className='tgr' value={rightAnswer} onChange={e => setRightAnswer(e.target.value)} />
            </div>
            <div className='te'>
              <p>please enter wrong answer 1</p>
              <input type="text" className='tgr' value={wrongAnswer1} onChange={e => setWrongAnswer1(e.target.value)} />
            </div>
            <div className='te'>
              <p>please enter wrong answer 2</p>
              <input type="text" className='tgr' value={wrongAnswer2} onChange={e => setWrongAnswer2(e.target.value)} />
            </div>
            <div className='te'>
              <p>please enter wrong answer 3</p>
              <input type="text" className='tgr' value={wrongAnswer3} onChange={e => setWrongAnswer3(e.target.value)} />
            </div>

            <div className='te'>
              <p>please enter Mark</p>
              <input type="text" className='tgr' value={mark} onChange={e => setMark(e.target.value)} />
            </div>
          </div>
          <button onClick={handleAddQuestion}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionSub;