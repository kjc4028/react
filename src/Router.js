import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Page1 from './components/page/Page1';
import Page2 from './components/page/Page2';
import Page3 from './components/page/Page3';
import DropDownComp from './components/DropDownComp'
import App from './App';
import Subject from './components/Subject';
import Footer from './components/Footer';
import Header from './components/Header';


export default () => (
    <Router>
        <Header/>
        <Route exact path="/" component={App}/>
        <Route exact path="/sub" component={Subject}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
        <Footer/>
    </Router>
    
)
