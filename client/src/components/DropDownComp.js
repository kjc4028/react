import React, {Component, useState } from 'react';
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


  
class DropDownComp extends Component{
  //컴포넌트 실행시 constructor 실행으로 초기화 진행
  constructor(props){
    console.log("constructor...." + props.title);
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'this is WEB...'},
      contents:[
        {id:1, title:'WEB',sub:'this is WEB!'},
        {id:2, title:'WAS',sub:'this is WAS!'},
        {id:3, title:'DB',sub:'this is DB!'}
      ],
      mode:'dev'
    };

 
  }       
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
        <DropdownItem><Link to="/sub" title={this.state.subject.title} sub={this.state.subject.sub}>subject</Link></DropdownItem>
        
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
export default DropDownComp;

