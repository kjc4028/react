import React, {Component} from 'react';

class TOC extends Component {
    render(){
    var lists = [];
      var data = this.props.data;
            for(var i=0; i<data.length; i++){
        lists.push(
            <li key={data[i].id}>
                <a href="/" 
                    onClick={function(e){
                    e.preventDefault();
                    }}>
                    {data[i].title}
                </a>
            </li>
            );
      }
      return(
        <div>
            <h2>=====TOC 영역>=====</h2>
            <ul>
                {lists}
            </ul>      
        </div>    
      )      
    }
  }

  //해당 컴포넌트를 외부에서 사용 가능하도록 선언
  export default TOC;