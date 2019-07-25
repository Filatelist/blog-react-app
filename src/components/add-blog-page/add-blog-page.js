import React, { Component } from 'react'
import './add-blog-page.css'
import BlogService from "../../service";

export default class AddBlogPage extends Component{

    state={ inpV:'', display:false, title:"", id:0 };

    postBlog = (event) =>{
        event.preventDefault();
        BlogService.getAllBlogs().then( body=>{ this.setState({id:body.length}) } );
        const { id, title, inpV } = this.state;
        const formData = { id, title, body:inpV };
        BlogService.addBlog(formData).then( ()=> {this.props.history.push('/')} )
    };

    render(){
         return(
            <div className="container">
                <div className="container-fluid">
                    <h4 className="naming">Add blog</h4>
                    <hr/>
                </div>
                <div className="list-of-blogs">
                    <form className="bg-light m-10 d-block">
                        <p className="naming">Title</p>
                            <span><input onChange={(event)=>{this.setState({title:event.target.value})}} className="add" value={this.state.title} /></span>
                        <hr/>
                        <p className="naming">Main text</p>
                        <textarea className="text-area " onChange={(event)=>{this.setState({inpV:event.target.value})}} value={this.state.body} />
                        <div className="d-flex p-1">
                            <button className="btn btn-own" onClick={(event)=>this.postBlog(event)}>POST</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
