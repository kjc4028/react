import React, {Component} from 'react';
import { Link } from "react-router-dom";

class LinkCom extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/page1" >page1</Link>
                    </li>
                    <li>
                        <Link to="/page2" >page2</Link>
                    </li>
                    <li>
                        <Link to="/page3" >page3</Link>
                    </li>                                        
                </ul>
            </div>
        );
    }
}
export default LinkCom;