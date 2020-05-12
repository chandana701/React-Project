import React from 'react';
 import ReactDOM from 'react-dom';
 import {Login} from './Login.js';
 import {Logout} from './Logout.js';
// import logo from './heart.jpg';


 class App extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        username : '',
        isLoggedIn : false
      }
     
    }
    myChangeHandler = (event)=>{
         this.setState({
           username : event.target.value
         })
    }
    LoginUpdate = (event)=>(
      this.setState({
        isLoggedIn :true
      })
    )
    LogoutUpdate = (event)=>(
      this.setState({
        isLoggedIn :false
      })
    )
   
    render(){
      return (
      <div>
       {this.state.isLoggedIn ? 
         
        <Logout username = {this.state.username}
        LogoutUpdate = {this.LogoutUpdate} />
        :
        <Login change={this.myChangeHandler}
         LoginUpdate = {this.LoginUpdate}
        />
       }
       </div>
      );
      
      
      
   
    }

      




 }



ReactDOM.render(

  <App />,
document.getElementById('root'));


export default App;
