import React from "react";

function CreatePost(){

    return (
            <div> 
               <h1> Create New Post</h1>
               <form>
                    <input
                        type="tyext"
                        placeholder="Add Post Content"
                    />
                    <input
                         type="file"

                    />
                    <button type="submit" className="btnPost">SUBMIT POST</button>
               </form>
            </div>
        );
}

export default CreatePost;