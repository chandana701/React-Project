import React from 'react';

 import ReactDOM from 'react-dom';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './history.js'
import {Login} from './Login.js'
 export class Logout extends React.Component{

    constructor(props){
      super(props);

     
    }
  
    render(){
      return (
       <Router>
        
        <div>
            <div>
          Welcome {this.props.username}!
          </div>
       <br></br>
       
        {/* <button onClick = {this.props.LogoutUpdate} >Logout</button> */}
        <Link to="/login" className="btn btn-primary" onClick = {this.props.LogoutUpdate} >Logout</Link>
           
           <Switch>
           <Route exact path = "/login">
             <Login/>
             </Route>
           </Switch>
                
        
        </div>
        </Router>
      );
      
      
      
   
    }


 }

