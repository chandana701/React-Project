
import React from 'react';
// import ReactDOM from 'react-dom';

export class Login extends React.Component{

constructor(props){
    super(props);
    this.state = {
        isLoggedIn : true
    }
}


render(){
    return <div>
        <p>
          <button onClick={()=>this.props.lo()}>Log Out</button>
          </p>
      User LoggedIn!
    </div>
}


  
}