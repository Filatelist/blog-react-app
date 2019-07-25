const path = 'http://bloggy-api.herokuapp.com/';

export default class BlogService {
    static addBlog = (data) =>{
        return fetch(path+'posts',{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        })
    };

    static getComments = async() =>{
        const comments = await fetch(path + 'comments');
        return await comments.json();
    };
    static getSingleBlog = async (id)=>{
        const blog = await fetch(path + 'posts/' +id);
        return await blog.json();
    };
    static getAllBlogs = async () =>{
        const res = await fetch(path + 'posts');
        return await res.json();
    };
    static postComment = async (data) =>{

        return fetch(path+'comments',{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
    };


    static editBlog = async (id,data) =>{
        return fetch(path + 'posts/' + id,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())

    };
    static deleteBlog = async (id) =>{
        return fetch(path + 'posts/'+ id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

}