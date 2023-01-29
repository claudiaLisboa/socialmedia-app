
import React, {  createContext, useState, useContext, useReducer } from "react";
import Login from './components/Loging'
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import  './App.css'


export const UserContext = createContext();
export const PostContext = createContext({
  posts:[]
});

function App() {
  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(()=> {}, initialPostState);
  const [user, setUser] = useState(""); // will display user login when user public the post
  //const [posts, setPosts] = useState([]);
 

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  /*const handleAddPost = React.useCallback(
    newPost => {
      setPosts([newPost, ...posts]);
    },
    [posts]
  );*/



  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <PostContext.Provider value ={{ state, dispatch }}>
        <UserContext.Provider value={user}>
          <Header user={user} setUser={setUser}/>
          <CreatePost user={user} 
          //handleAddPost={handleAddPost} 
          />
          <PostList  posts={state.posts} />
        </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
