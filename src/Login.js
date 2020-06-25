import React from 'react';
 import ReactDOM from 'react-dom';
import history from './history'; 
import {Logout} from './Logout.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


 export class Login extends React.Component{

    constructor(props){
      super(props);
     
     
    }
   
  
    render(){
      return (
       
       <Router>
          
        <form>
          <h1>User Name</h1>
          <input type = "text"
            onChange = {this.props.change}
           />
           <Link to="/logout" className="btn btn-primary" onClick = {this.props.LoginUpdate} >Login</Link>

            {/* <button onClick = {this.props.LoginUpdate}>Login</button> */}
           <Switch>
           <Route exact path = "/logout">
             <Logout/>
             </Route>
           </Switch>
                
        </form>
        </Router>
       
      );
      
      
      
   
    }





 }
 

