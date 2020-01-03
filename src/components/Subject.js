import React, {Component} from 'react';

class Subject extends Component {
  render(){
    const height_100 = {
      height: '100%',
    }
    return(
      <div className="jumbotron" style={height_100}>
        <div className="container" style={height_100}>
          <h2>===== compnent 영역=====</h2>
              <h1>{this.props.title}  (props)</h1>
                  {this.props.sub}  (props)
        </div>
      </div>
    );
  }
}

export default Subject;