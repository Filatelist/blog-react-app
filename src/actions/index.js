
const blogsLoaded = (newBlog) =>{
    return{
        type:'BLOGS_LOADED',
        payload: newBlog
    }
};
const commentLoaded = (comments) =>{
    return{
        type:'COMMENTS_LOADED',
        payload: comments
    }
};
const singleLoaded = (single) =>{
    return{
        type: 'BLOG_LOADED',
        payload:single
    }
};
const commentAdded = (comment) =>{
    return {
        type: 'COMMENT_ADDED',
        payload: comment
    }
};
const blogEdited = (blog) =>{
    return {
        type: 'BLOG_EDITED',
        payload: blog
    }
};

export {
    blogsLoaded,
    commentLoaded,
    singleLoaded,
    commentAdded,
    blogEdited
}
