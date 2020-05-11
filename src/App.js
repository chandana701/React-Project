import React from 'react';
 import ReactDOM from 'react-dom';
// import logo from './heart.jpg';
 import './App.css';

 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { age: '',
           isSubmitted :false };
    }
  
  myChangeHandler = (event) => {
    this.setState({age: event.target.value});
  }
  

   
mySubmitHandler (event) {
  // event.prevent.default();
   this.setState({
    isSubmitted : true
    }
   )
 
 
}

  
  render() {
    return(
    <form>
       
      <h1>Enter your age :</h1>

      <input
        type='number'
        name = 'age'
         onChange={this.myChangeHandler}
      />

      <button onClick= {(event)=>{event.preventDefault();this.mySubmitHandler(event)}}>Submit</button>
      
     
      
      { this.state.isSubmitted ? 
       <div>Your Age is {this.state.age}</div> : <div></div>
       
      }
     
 <br></br>
       </form>

    );
       

  }

}

ReactDOM.render(

  <App />,
document.getElementById('root'));


export default App;
