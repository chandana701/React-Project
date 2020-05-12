import React from 'react';
 import ReactDOM from 'react-dom';
 

 export class Logout extends React.Component{

    constructor(props){
      super(props);
     
     
    }
  
    render(){
      return (
      
        <div>
            <div>
          Welcome {this.props.username}!
          </div>
       <br></br>
        <button onClick ={this.props.LogoutUpdate}>Logout</button>
        </div>
      );
      
      
      
   
    }


 }

