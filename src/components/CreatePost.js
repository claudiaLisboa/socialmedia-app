import React, {  useState, useRef, useContext } from "react";
import { PostContext } from "../App";


function CreatePost({user, handleAddPost }){
    const {dispatch} = useContext(PostContext);
    const [content, setContent] =  useState('');
    const [image, setImage] = useState(null);
    const imageInputRef = useRef();

    function handleSubmit(event){
        event.preventDefault();
        const post ={ content, image, user, id: Date.now()};
        //handleAddPost(post);
        dispatch({type: "ADD_POST", playload:{ post }});
        setContent("");
        setImage(null);
        imageInputRef.current.value = '';

    }

    return (
        <div> 
            <h1> Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="inputContent"
                    placeholder="Add Post Content"
                    onChange={event => setContent(event.target.value)}
                    value={content}
                />
                <input
                    type="file"
                    className="inputFile"
                    onChange={event => setImage(event.target.files[0])}
                    ref={imageInputRef}
                />
                <button type="submit" className="btnPost">SUBMIT POST</button>
            </form>
            <div className="footer">
                 <span className="created-by">Created by Claudia Lisboa - For studying purpose</span> 
            </div>
        </div>
    );
}

export default CreatePost;

