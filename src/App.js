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
        <NavBar />
        {/* <Switch> */}
          <Route path="/Details">
            <Details details={details}/>
            <Footer />
          </Route>
          <Route path="/StudentHome">
            <StudentHome />
            <Footer />
          </Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
