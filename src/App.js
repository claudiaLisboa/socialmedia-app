
import React, { useState } from "react";
import Login from './components/Loging'
import  './App.css'

function App() {
 const [user, setUser] = useState('');


  if (!user){
    return <Login setUser={setUser}/>;
  }
  
  return (
    <div >
       <p>Dora Linda</p>
   
    </div>
  );
}

export default App;
