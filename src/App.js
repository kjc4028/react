import React, {Component} from 'react';
//import TOC from "./components/TOC"
import Subject from './components/Subject'
import 'bootstrap/dist/css/bootstrap.css';
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
        // <main>
        //   <div className="input-group-text"> 
        //     <div className="form-inline">
        //       <button className="btn btn-default">Click Me</button>
        //     </div>             
        //          <button onClick={function(e){ 
        //           e.preventDefault(); 
        //           alert("mode 값 변경");
        //           this.setState({mode:'test'});             
        //         }.bind(this)}>버튼</button>
        //     <div>mode: {this.state.mode}</div>
        //     <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        //     <TOC data={this.state.contents}></TOC>
        //   </div>
        //   </main>     
        <div className="h-100">
          {/* header */}
          <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">header</a>
          </nav>
          {/* component */}
          <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
          {/* footer */}
          <nav class="navbar fixed-bottom navbar-dark bg-dark">
          <a class="navbar-brand" href="#">bottom</a>
          </nav>
        </div>     
    );
  }
}

export default App;
