function postReducer(state, action){
    switch(action.type){
        case "ADD_POST" :{
            const newPost = action.playload.post;
            return{
                posts: [ newPost, ...state.posts ]
            };
        }
        case "DELETE_POST" :{
            const deletePostId = action.playload.id;
            return{ 
                posts: state.post.filter(post => post.id !== deletePostId)
            };
        }
        default:
            return state;
    }

}

export default postReducer;