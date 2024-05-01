// import './addStudentTable.scss'
import './editQuestion.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const EditQuestion = () => {


return (

    <div className='home'>
    <Sidebar />
    <div className='cantanq'>
    <Navbar />
    
    
    <div className='addstudent'>
    <h2>Edit Question</h2>

    <div className='gtr'>
   <div className='te'>
   <p>please enter text of question</p>
    <input type="text" className='tgr' />
   </div>
   <div className=' te right'>
   <p>please enter right to question</p>
    <input type="text" className='tgr' />
   </div>
    <div className='te'>
    <p>please enter wrong of question1</p>
    <input type="text" className='tgr' />
    </div>
    <div className='te'>
    <p>please enter wrong of question2</p>
    <input type="text" className='tgr' />
    </div>

    <div className='te'>
    <p>please enter wrong of question3</p>
    <input type="text" className='tgr' />
    </div>

    </div>
    <button>Edit</button>
    </div>
    
    </div>
</div>
);
};

export default EditQuestion;