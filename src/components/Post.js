import React from "react";

function Post({ image, content, user }) {
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
      <div>{user}</div>
    </>
  );
}

export default Post;
