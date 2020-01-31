import React, {Component} from 'react';
import DropDownComp from './DropDownComp';

class Header extends Component {
  render(){
    return(
        <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">header</a>
        <DropDownComp/>
        </nav>
    );
  }
}

export default Header;