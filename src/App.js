
import React from "react";
import Login from './components/Loging'

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
