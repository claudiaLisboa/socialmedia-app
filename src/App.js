
import React, {  createContext, useState } from "react";
import Login from './components/Loging'
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import  './App.css'


export const UserContext = createContext();



function App() {
  const [user, setUser] = useState(""); // will display user login when user public the post
  const [posts, setPosts] = useState([]);
 

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  const handleAddPost = React.useCallback(
    newPost => {
      setPosts([newPost, ...posts]);
    },
    [posts]
  );



  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <UserContext.Provider value={user}>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList  posts={posts} />
      
    </UserContext.Provider>
  );
}

export default App;
