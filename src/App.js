
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import "./style.scss";
// import List from "./pages/list/AllTeacherCont";
import AllTeacherCont from "./pages/list/AllTeacherCont";
import AllStudent from "./pages/allStudent/AllStudent";
import Single from "./pages/single/Single";
import Timetable from "./pages/timetable/Timetable";
import New from "./pages/new/New";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import "./App.css"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import LessonsList from "./pages/lessonList/LessonList";
import Main from "./pages/Main/Main";
// import StudentTable from "./pages/studenttable/StudentTable";
import MarkStudent from "./pages/studenttable/MarkStudent";
import ClassList from "./pages/classList/ClassList";
import ServicesList from "./pages/serviceList/ServiceList";
import EditService from "./pages/editService/EditService";
import AddLesson from "./pages/AddLesson/AddLesson";
import EditLesson from "./pages/EditLesson/EditLesson";
import AddService from "./pages/AddService/AddService";
import Notication from "./pages/Notifcation/Notifcation";
import AddNotifcation from "./pages/Addnotification/AddNotification";
import EditNotifcation from "./pages/EditNotifcation/EditNtifcation";
import AddStudfentTable from "./pages/AddStudentTable/AddStudentTable";
import EditStudentTable from "./pages/EditStudentTable/EditStudentTable";
import StudentGrades from "./pages/Studentone/Studentone";
import Order from "./pages/Order/Order";
import AddOrder from "./pages/AddOrder/AddOrder";
import EditOrder from "./pages/EditOrder/EditOrder";
import Quastion from "./pages/Question/Question";
import AddQuestion from "./pages/AddQuestion/AddQuestion";
import EditQuestion from "./pages/EditQuestion/EditQuestion";
import Subject from "./pages/allSubject/AllSubject";
import AddSubject from "./pages/AddSubject/AddSubject";
import EditSubject from "./pages/EditSubject/EditSubject";
import LessonsList from "./pages/lessonList/LessonList"

import Profil from "./pages/Profil/Profil";
/*--------------- User Page ------------------------------- */
// import Header from "./component/common/heading/Header"
// import { BrowserRouter as Router, Switch ,Route } from "react-router-dom"
// import { BrowserRouter , Route, Routes } from "react-router-dom";
import About from "./component/about/About"
import CourseHome from "./component/allcourses/CourseHome"
import Team from "./component/team/Team"
import Pricing from "./component/pricing/Pricing"
import Blog from "./component/blog/Blog"
import Contact from "./component/contact/Contact"
// import Footer from "./component/common/footer/Footer"
import Homee from "./component/homee/Homee"
import Login from "./component/login/Login";
import SignUp from "./component/signup/Signup"
import Hom from "./pages/hom/Hom";
import Chat from "./compon/Chat";
import GroupForm from "./compon/AddGroup/AddGroup";

// import QuestionSubject from "./pages/QuestionSubject/QuestionSubject";
import QuestionSubject from "./pages/QuestionSuject/QuestionSubject";
import AddQuestionSub from "./pages/AddQuestionSub/AddQuestionSub";

import io from 'socket.io-client';

const socket = io('http://localhost:8000');

function App() {
  

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">

            <Route index element={<Home />} />
            
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="users">
              <Route index element={<AllStudent />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New teachers" />}/>
            </Route>

            <Route path="products">
              <Route index element={<AllStudent />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Student" />}
              />
            </Route>



            <Route path="classes">
              <Route index element={<ClassList />} />
              <Route path="timetable" element={<Timetable />} />
            </Route>


            <Route path="/lessons">
              <Route index element={<Subject  />} />
              <Route path="adde" element={<AddSubject />} />
              <Route path="edites/:id" element={<EditSubject />} />

              
              <Route path="quessub/:idsubject">

<Route index element={<QuestionSubject  />} />
{/* <Route path="edits/:questionId" element={<EditQuestion />} />  */}
<Route path="addee" element={<AddQuestionSub />} /> 

</Route>

          
              

           
              <Route path="lesson/:id">
              <Route index element={<LessonsList  />} />
              <Route path="adde" element={<AddLesson />} />
              <Route path="edites/:id" element={<EditLesson />} />



              <Route path="question/:lessonId">

              <Route index element={<Quastion  />} />
              <Route path="edits/:questionId" element={<EditQuestion />} /> 
              <Route path="adde" element={<AddQuestion />} /> 

              </Route>

            </Route>
            

              
            </Route>

            <Route path="/notifcation">
              <Route index element={<Notication  />} />
              <Route path="add" element={<AddNotifcation />} />
              <Route path="edites/:Idnot" element={<EditNotifcation />} /> 

              <Route path="order/:Idnot">
              <Route index element={<Order  />} />
              <Route path="add" element={<AddOrder />} />
              <Route path="edites/:idorder" element={<EditOrder />} />
            </Route>

            </Route>

            <Route path="/books" element={<Main />} />
            <Route path="/profile" element={<Profil />} />

            {/* <Route path="/chat" element={<Hom />} /> */}
            <Route path="/chat">
            <Route index element={<Hom socket={socket} />}/>
            <Route path="adde" element={<GroupForm />} />
            <Route path="chats/:id/:isGroup" element={<Chat socket={socket}  />} />


            </Route>



          

            <Route path="/studentTable">
              <Route index element={<MarkStudent  />} />
              <Route path="add" element={<AddStudfentTable />} />
              <Route path="edites" element={<EditStudentTable />} />
              <Route path="one" element={<StudentGrades />} /> 
            </Route>

        
            <Route path="/service">
              <Route index element={<ServicesList />} />
              <Route path="add" element={<AddService />} />
              <Route path="edites" element={<EditService />} /> 
            </Route>

            <Route path='/use'>
            {/* <Header /> */}
            <Route index element={<Homee/>} />
            <Route path="/use/login" element={<Login/>}/>
            <Route path="/use/signup" element={<SignUp/>}/>
            <Route  path='/use/about' element={<About/>} />
          <Route  path='/use/courses' element={<CourseHome/>} />
          <Route  path='/use/team' element={<Team/>} />
          <Route  path='/use/pricing' element={<Pricing/>} />
          <Route  path='/use/journal' element={<Blog/>} />
          <Route  path='/use/contact' element={<Contact/>} />
          {/* <Footer/> */}
            </Route>
        
          </Route>
        </Routes>

  
      </BrowserRouter>

      {/* --------------------------------------------------------- */}

    

    </div>
  );
}

export default App;
