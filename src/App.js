
import React, { useEffect, useState } from "react";
import Login from './components/Loging'
import Header from "./components/Header";
import  './App.css'

function App() {
 const [user, setUser] = useState('');

  useEffect(() =>{
    document.title = user ? `${user}'s Feed` : 'Please login'
  }, [user]);

  if (!user){
    return <Login setUser={setUser}/>;
  }

  return (
    <div >
      <Header user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
