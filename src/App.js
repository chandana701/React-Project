import React from 'react';
 import ReactDOM from 'react-dom';
 import {Login} from './Login.js';
 import {Logout} from './Logout.js';
// import logo from './heart.jpg';


 class App extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        isLoggedIn :true
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
    

    render(){
      return(
        // <div>
        // {/* {this.state.isLoggedIn?   
        //   <p>
        //   <button onClick={()=>this.Lg()}>Log Out</button>
        //   </p>
        //  :
        //  <p>
        //  <button onClick={()=>this.LO()}>Log In</button>
        //  </p> */}

        //  {/* } */}

         
        
        <div>
       
       {this.state.isLoggedIn?
        <Login 
          lo = {this.LO}
        />    
           :
        <Logout
          lg = {this.Lg}
        />
              
       
       }
      
      {/* </div> */}
      </div>
      );
      // return(

      //  <div>
      //    <Login></Login>
      //    <Logout></Logout>
      //  </div>
      // )
    }






 }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { age: '',
//            isSubmitted :false };
//     }
  
//   myChangeHandler = (event) => {
//     this.setState({age: event.target.value});
//     this.setState({
//       isSubmitted : false
//     })
//   }
  

   
// mySubmitHandler (event) {
  // event.prevent.default();
//    this.setState({
//     isSubmitted : true
//     }
//    )
 
 
// }

  
//   render() {
//     return(
//     <form>
       
//       <h1>Enter your age :</h1>

//       <input
//         type='number'
//         name = 'age'
//          onChange={this.myChangeHandler}
//       />

//       <button onClick= {(event)=>{event.preventDefault();this.mySubmitHandler(event)}}>Submit</button>
      
     
      
//       { this.state.isSubmitted ? 
//        <div>Your Age is {this.state.age}</div> : <div></div>
       
//       }
     
//  <br></br>
//        </form>

//     );
       

//   }

// }

ReactDOM.render(

  <App />,
document.getElementById('root'));


export default App;
