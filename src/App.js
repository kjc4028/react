import React, {Component} from 'react';
import TOC from "./components/TOC"
import Subject from './components/Subject'

import './App.css';
//state는 component내부에서만 사용 
class App extends Component {
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
    render() {
        return (
          <div className="App">    
                 <button onClick={function(e){ 
                  e.preventDefault(); 
                  alert("mode 값 변경");
                  this.setState({mode:'test'});             
                }.bind(this)}>버튼</button>
        <div>mode: {this.state.mode}</div>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
      </div>
    );
  }
}

export default App;
