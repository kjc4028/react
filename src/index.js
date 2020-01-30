import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Page1 from './components/page/Page1';
import Page2 from './components/page/Page2';
import Page3 from './components/page/Page3';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { IndexRoute } from 'react-router';

ReactDOM.render(
    <Router>
        {/* <LinkCom/> */}
        {/* <IndexRoute path="/" component={App}/> */}
        <Route exact path="/" component={App}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
