import React, {Component} from 'react';
import './main-page.css'
import BlogList from "../blog-list";
import BlogService from "../../service";
import {blogsLoaded} from "../../actions";
import {connect} from "react-redux";
class MainPage extends Component{

    componentDidMount() {
        BlogService.getAllBlogs().then((body)=> {
                this.props.blogsLoaded(body)
            }
        )
    }

    render(){
        return(
        <div className="container">
            <div className="container-fluid">
                <h4 className="naming">Blogs</h4>
                <hr/>
            </div>
            <div className="list-of-blogs">
                <BlogList blogs={this.props.blogs} />
            </div>
        </div>
        );
    }
}

const mapStateToProps = ({blogs}) => {
    return {
        blogs
    }
}
const mapDispatchToProps = {
    blogsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)