import React from 'react';
 import ReactDOM from 'react-dom';
 import {Login} from './Login.js';
 import {Logout} from './Logout.js';
// import logo from './heart.jpg';


 class App extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        isLoggedIn :true,
        username : '',
      }
    }
    Lg=(event)=>{
      // event.preventDefault();
      this.setState({
        isLoggedIn : true
      })
    }
    LO= (event)=>{
      this.setState({
        isLoggedIn : false
      })
    }
    myChangeHandler = (event) =>{
      this.setState({
        username : event.target.value,
        isLoggedIn :true
      })

    }

    render(){
      return(
      
       <form>
   
      
        {this.state.isLoggedIn?
        <p>
        <h1>User Name</h1>
       <input type = 'text' 
          name = 'username'
          onChange = {this.myChangeHandler}
       />
        
          <button onClick={(event)=>{event.preventDefault();this.LO()}}>Login</button>
          
          </p>
          :
         <p>
           <div>Welcome {this.state.username}!</div>
          <button onClick={(event)=>{event.preventDefault();this.Lg()}}>Logout</button>
   
        </p>
        }
         
        
      
       
       {/* {this.state.isLoggedIn?
        <Login 
          lo = {this.LO}
        />    
           :
        <Logout
          lg = {this.Lg}
        />      
       
       } */}
     

     
       </form>
        
      
      
      );
   
    }






 }



ReactDOM.render(

  <App />,
document.getElementById('root'));


export default App;
