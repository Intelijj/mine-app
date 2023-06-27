
import './App.css';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Textformn from './components/Textformn';
import Alertsn from './components/Alertsn';
import Aboutn from './components/Aboutn';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState("hello");
  const showalert=(message ,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setalert("")
      
    }, 1500);

  }
 
const [mode, setmode] = useState('light');
const toglle=()=>{
  if(mode==='light'){
  setmode('dark');
  document.body.style.backgroundColor='grey';
  showalert("dark mode done","success");
  }
  else{
  setmode('light');
  document.body.style.backgroundColor='white';
  showalert("light mode done","success");
}
  }


  return (
<>
<Router>
  <Navbar title="texTer" mode={mode} toglle={toglle}></Navbar>
  <Alertsn alert={alert}></Alertsn>
  <div className="container my-3" >
  <Routes>
          <Route  exact path="/aboutn" element={ <Aboutn />}>
           
          </Route>
          
          <Route  exact path="/" element={ <Textformn mode={mode} showalert={showalert} /> }>
         
            
          </Route>
        </Routes>
  
          
           
    


  </div>
  </Router>


  </>
  );
}

export default App;

