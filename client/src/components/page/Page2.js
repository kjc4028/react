
import React, {Component} from 'react';



class Page2 extends Component {
 

  state = {
    messages: []
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    return body;
  }

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({messages: res}))
    //   .catch(err => console.log(err));
      fetch('/page2')
      .then(res => res.json())
      .then(messages => this.setState({messages}))

   };
  


  render(){
    return (
      <div>
        <ul>
          {this.state.messages.map(msg =>
            <li key={msg.id}>{msg.id} : {msg.username} </li>
          )}
        </ul>
             PAGE2
      </div>
    );

  };
};
export default Page2;