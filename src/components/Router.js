import React, {Component} from 'react';
import Page1 from './page/Page1';
import Page2 from './page/Page2';
import Page3 from './page/Page3';
import LinkCom from './LinkCom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => (
    <Router>
        <LinkCom/>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
    </Router>
)
