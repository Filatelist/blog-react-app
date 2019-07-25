
const initialState ={
    blogs:[],
    comments:[],
    blog:{}
};

const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'BLOGS_LOADED':
            return{
                ...state,
                blogs: action.payload
            };
        case 'COMMENTS_LOADED':
            return{
                ...state,
                comments: action.payload
            };
        case 'BLOG_LOADED':
            return{
                ...state,
                blog:action.payload
            };
        case 'COMMENT_ADDED':
            return {
                ...state,
                comments: [
                    ...state.comments, action.payload
                ]
            };
        case 'BLOG_EDITED':
            return {
                ...state,
                blog: action.payload
            };

        default:return state;
    }

};

export default reducer;
