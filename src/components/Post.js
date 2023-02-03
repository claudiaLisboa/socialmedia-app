import React, { useContext } from "react";
import {UserContext, PostContext} from '../App';

function Post({ image, content, user, id }) {
  const currentUSer = useContext(UserContext);
  const { dispatch } = useContext(PostContext);
  const isCurrentUser = currentUSer === user;

  function handleDeletePost(){
   dispatch({ type: "DELETE_POST", payload:{ id }});
  }
  return (
      <>
          {image && (
            <img
              style={{ height: 300, width:250, objectFit: "cover" }}
              src={URL.createObjectURL(image)}
              alt="Post cover"
            />
          )}
          <p>{content}</p>
          <div style={{ color: isCurrentUser && "green"}}>{user}</div>
          <div>
              {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
          </div>
    </>
  );                                                                                                                                       
}

export default Post;
