import React , {Component} from 'react';
import BlogService from "../../service";
import {connect} from 'react-redux';
import './display-page.css'
import {commentAdded, commentLoaded, singleLoaded, blogEdited} from "../../actions";

class DisplayPage extends Component{
    state={ inpV:'', display:false, title:"" };

    componentDidMount() {
        BlogService.getSingleBlog(this.props.itemId).then((body)=>{
            this.props.singleLoaded(body)
        });

        BlogService.getComments().then((body)=>{
            this.props.commentLoaded(body)
        });
    }

    submitForm = (event, postId, id) =>{
        event.preventDefault();
        if (this.state.inpV.length > 0){
            const formData = { id, postId, body: this.state.inpV };
            BlogService.postComment(formData).then(()=>{
                this.props.commentAdded(formData);
                this.setState({inpV:''})
            });
        }

    };

    deleteItem =(event)=>{
        event.preventDefault();
        BlogService.deleteBlog(this.props.blog.id).then(()=>{this.props.history.push('/');})
    };

    editItem = (event, title, body, id) =>{
        event.preventDefault();
        const formData = {id, title, body};

        this.props.blogEdited(formData);
        BlogService.editBlog(id, formData);
        this.setState({display:false})
    };

    render(){
        const {itemId, blog, comments} = this.props;
        const {display, body, title} = this.state;
        if (display){
            return(
                <div className="container">
                    <div className="container-fluid">
                        <h4 className="naming">Blog {itemId}</h4>
                        <hr/>
                        <form className="bg-light m-10 d-block">
                            <span><input onChange={(event)=>{
                            this.setState({title:event.target.value})}} className="decorate" value={title} /></span>
                            <hr/>
                            <textarea className="text-area" onChange={(event)=>{this.setState({body:event.target.value})}} value={body} />
                            <div className="d-flex p-1">
                                <button className="btn btn-primary" onClick={(event)=>this.editItem(event, title, body, blog.id)}>Save</button>
                                <button className="btn btn-danger" onClick={()=>{this.setState({display:false})}}>Exit</button>
                            </div>
                        </form>

                    </div>
                </div>
            );
        }
        return(
        <div className="container">
            <div className="container-fluid">
                <h4 className="naming">Blog {itemId}</h4>
                <hr/>
            </div>
            <div className="list-of-blogs">
                <span><h5 className="decorate">{blog.title}</h5></span>
                <hr/>
                <span>{blog.body}</span>
                <br/>
                <div className="float-right p-1 d-flex">
                    <button className="btn btn-default" onClick={this.deleteItem}><img src="https://raw.githubusercontent.com/Filatelist/Blog-React-application/master/src/components/display-blog/waste-bin.png" alt="Delete"/></button>
                    <button className="btn btn-default" onClick={()=>{this.setState({display: true, title:blog.title, body:blog.body})}}><img src="https://raw.githubusercontent.com/Filatelist/Blog-React-application/master/src/components/display-blog/edit.png" alt="Edit"/></button>
                </div>
                <form action="submit" onSubmit={(event)=>this.submitForm(event,blog.id, comments.length+1)}>
                    <input className="naming border-bottom"
                           onChange={
                               (event)=>this.setState({inpV:event.target.value})}
                           value={this.state.inpV}
                           placeholder="Type comment here" />
                    <button className="btn btn-default shadow-sm m-2"
                            onClick={(event)=>this.submitForm(event, blog.id, comments.length+1)}>
                        Comment
                    </button>
                </form>
                <ul>
                    {
                        comments.map(item =>{
                            if (item.postId === blog.id){
                            return(
                                <li className="list-group d-flex comment" key={item.id}>
                                <div>
                                    <img src="https://raw.githubusercontent.com/Filatelist/Blog-React-application/master/src/components/display-blog/user.png" width={22} className="m-2" alt="Avatar"/>
                                    {item.body}
                                </div>
                                </li>
                            );
                            }
                        })
                    }
                </ul>
            </div>
        </div>
        );
    }
};

const mapStateToProps = ({blog, comments}) => {
    return {
        blog, comments
    }
};

const mapDispatchToProps = {
    commentLoaded,
    commentAdded,
    singleLoaded,
    blogEdited
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPage);
