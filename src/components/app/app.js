import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';
import MainPage from '../main-page';
import AddBlogPage from '../add-blog-page';
import DisplayPage from '../display-blog-page';
import Header from '../header';

class App extends Component {

    render(){
        return (
            <Router>
                <Header/>
                <Route exact path="/" component={MainPage}/>
                <Route path="/add-blog" render={({history})=><AddBlogPage history={history} />}/>
                <Route path="/blog/:id" render={({match, history}) => <DisplayPage history={history} itemId={match.params.id}/>
                }/>
            </Router>
        );
    }
}

export default App
