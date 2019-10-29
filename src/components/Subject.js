import React, {Component} from 'react';

class Subject extends Component {
  render(){
    return(
      <div>
        
        <h2>=====Subject 영역=====</h2>
        <header>
   
            <h1>{this.props.title}</h1>
                {this.props.sub}
        </header>
      </div>
    );
  }
}

export default Subject;