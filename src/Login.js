import React from 'react';
 import ReactDOM from 'react-dom';
 

 export class Login extends React.Component{

    constructor(props){
      super(props);
     
     
    }
  
   
    render(){
      return (
        
        <form>
          <h1>User Name</h1>
          <input type = "text"
            onChange = {this.props.username}
           />
           <button onClick = {this.props.LoginUpdate}>Login</button>
              
             
        </form>
       
      );
      
      
      
   
    }

      




 }
