import React, { useContext } from "react";
import {UserContext, PostContext} from '../App';

function Post({ image, content, user, id }) {
  const currentUSer = useContext(UserContext);
  useContext(PostContext);
  const isCurrentUser = currentUSer === user;


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
          {isCurrentUser && <button oncC>Delete</button>}
    </>
  );                                                                                                                                       
}

export default Post;
