import { current } from "page";
import React from "react";

function Post({ image, content, user }) {
  
  return (
    <UserContext.Consumer >
    {currentUser => (
      <>
        {image && (
        <img
          style={{ height: 300, width:250, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
          alt="Post cover"
        />
      )}
      <p>{content}</p>
      <div style={{ color: currentUser === && 'green' }}>{user}</div>
      </>
    )}
    </UserContext.Consumer>
  );
}

export default Post;
