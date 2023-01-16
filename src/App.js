
import React, { useEffect, useState } from "react";
import Login from './components/Loging'
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import  './App.css'

const functionsCount = new Set();

function App() {
  const [user, setUser] = React.useState("reed");
  const [posts, setPosts] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  const handleAddPost = React.useCallback(
    newPost => {
      setPosts([newPost, ...posts]);
    },
    [posts]
  );

  functionsCount.add(handleAddPost);
  console.log(functionsCount);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <CreatePost />
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          {post.image && (
             <img  
               style={{height: 300, width:250, objectFit: 'cover'}}
                src={URL.createObjectURL(post.image)}
                alt="Post cover"
             />
          )}
          <p>{post.content}</p>
          <div>{user}</div>
          </React.Fragment>
      ))}
      </div>
  );
}

export default App;
