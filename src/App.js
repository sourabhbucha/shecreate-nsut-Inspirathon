import './App.css';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import StudentHome from './Components/StudentHome/StudentHome';
import wideImg from './Components/Assets/Images/WideImg.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components/homePage/Homepage';
import Form from './Components/RegisterForm/Form';
import Form1 from './Components/RegisterForm/Form1';
import Form2 from './Components/RegisterForm/Form2';
function App() {

  const details = {
    img: wideImg,
    title: "This is The Title",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    exp: 5,
    avg: 600,
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    location: "India",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }

  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
          <Route path="/Details">
            <NavBar />
            <Details details={details}/>
            <Footer />
          </Route>
          <Route path="/StudentHome">
            <NavBar />
            <StudentHome />
            <Footer />
          </Route>
          <Route path="/Home">
            <Homepage />
          </Route>
          <Route path="/TeacherForm2">
            <NavBar />
              <Form2 />
            <Footer />
          </Route>
          <Route path="/TeacherForm1">
            <NavBar />
              <Form1 />
            <Footer />
          </Route>
          <Route path="/TeacherForm">
            <NavBar />
              <Form />
            <Footer />
          </Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
