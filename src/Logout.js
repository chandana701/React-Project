
import React from 'react';
// import ReactDOM from 'react-dom';


export class Logout extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }
    
    render(){
        return <div>
             <p>
          <button onClick={()=>this.props.lg()}>Log In</button>
          </p>
           User LoggedOut!
        </div>

    }
    

}

