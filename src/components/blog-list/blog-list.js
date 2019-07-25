import React from 'react';
import './blog-list.css'
import { Link } from 'react-router-dom'


const BlogList = ({ blogs }) =>{
    return(
        <ul className="p-2">
            {
                blogs.map(item=>{
                    return(
                        <li className="list-group part" key={item.id}>
                            <div className="d-block border p-2">
                                <span><h5 className="decorate">{item.title}</h5></span>
                                <hr/>
                                <Link className="btn btn-default border" to={`/blog/${item.id}`}>Read mode...</Link>
                                <span>
                                </span>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default BlogList;
