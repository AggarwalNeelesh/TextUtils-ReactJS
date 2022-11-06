import "./App.css";
import {useState} from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // alert is an object
  // type : danger, success, primary ...
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","light");
    }else{
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled","secondary");
    }
  }
  // const [color, setColor] = useState("4");
  // const changeTheme =(paint) =>{
  //   if(paint === "0"){
  //     setMode("light");
  //     document.body.style.backgroundColor = 'white';
  //   }
  //   else if(paint==="1"){
  //     document.body.style.backgroundColor = '#0f1876';
  //     setColor("#0f1876");
  //   }else if(paint==="2"){
  //     document.body.style.backgroundColor = '#1fb604';
  //     setColor("#1fb604");
  //   }else if(paint==="3"){
  //     document.body.style.backgroundColor = '#920895';
  //     setColor("#920895");
  //   }else if(paint==="4"){
  //     document.body.style.backgroundColor = '#6f09a7';
  //     setColor("#6f09a7");
  //   }
  // }
  return (
    <>
    {/* <Router> */}
    <Navbar  mode={mode} toggleMode={toggleMode}  title='TextUtils'/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
        {/* <Route path="/about">
          <About />
        </Route> */}
        {/* <Route exact path="/about" element={<About/>} /> */}
        {/* <Route exact path='/' element={ */}
        <TextForm heading="Enter the text to analize" mode={mode} showAlert={showAlert}/>
        {/* // } /> */}
        {/* <Route path="/">
          <TextForm heading="Enter the text to analize" mode={mode} showAlert={showAlert}/>
        </Route> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
