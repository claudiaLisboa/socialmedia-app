
import React from "react";
import Login from './components/Loging'
import  './App.css'

function App() {

  let user = "";

  if (!user){

    return <Login />;
    

  }
  return (
    <div >
       <p>Dora Linda</p>
   
    </div>
  );
}

export default App;
