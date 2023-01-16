import React, { useEffect, useState } from "react"


function CreatePost(){

    const [content, setContent] =  useState('');
    const [image, setImage] = useState(null);

return (
<div> 
    <h1> Create New Post</h1>
    <form>
        <input
            type="tyext"
            placeholder="Add Post Content"
            onChange={event => setContent(event.target.value)}
        />
        <input
            type="file"
            onChange={event => setImage(event.target.files[0])}
        />
        <button type="submit" className="btnPost">SUBMIT POST</button>
    </form>
    <p>{content}</p>
    {image &&<img
        alt="imagePost"
        style={{height: 100, width:200, objectFit: 'cover'}}
        src={URL.createObjectURL(image)}
    />}
</div>
);
}

export default CreatePost;