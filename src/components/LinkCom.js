import React, {Component, useState } from 'react';
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


  
class LinkCom extends Component{
    render(){
        //  const [dropdownOpen, setDropdownOpen] = useState(false);
        // const toggle = () => setDropdownOpen(prevState => !prevState);
        return(
            <UncontrolledDropdown>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
        {/* <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider /> */}
        
        <DropdownItem><Link to="/page1" >page1</Link></DropdownItem>
        <DropdownItem><Link to="/page2" >page2</Link></DropdownItem>
        <DropdownItem><Link to="/page3" >page3</Link></DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>
  

            // <div>
            //     <ul>
            //         <li>
            //             <Link to="/page1" >page1</Link>
            //         </li>
            //         <li>
            //             <Link to="/page2" >page2</Link>
            //         </li>
            //         <li>
            //             <Link to="/page3" >page3</Link>
            //         </li>                                        
            //     </ul>

                
            // </div>



        );
    }
}
export default LinkCom;

