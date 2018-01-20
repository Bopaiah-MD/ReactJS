import React, { Component } from 'react';

class FormExample extends Component {

constructor(props) {
    super(props)
    this.state = {
      app :{
        title:"title here...",
        subTitle:"subTitle here ..",
        options: []
      },
       numbers : [11,22,33]
    }
  }

  onFormSubmit = (e) => {
   e.preventDefault();

// acccess the typed value like this 
   const option = e.target.elements.option.value;

   //check if typed and add it to app.options array

   if (option){
   this.state.app.options.push(option)
    e.target.elements.option.value = "";
    this.setState(this.state.app);
    console.log(this.state.app);
}

  }

  removeAll = () => {
    
    this.state.app.options = [];
    this.setState(this.state.app);
    console.log(this.state.app);

  }

  makeDecission = () => {
// usage of Math.random   
let randomNum = Math.floor(Math.random() * this.state.app.options.length);
let option = this.state.app.options[randomNum]
alert(option)  


  }

render() {
    return (
      <div>
          <h3>{this.state.app.title}</h3>
           <h3>{this.state.app.subTitle}</h3>
    <p> 
      {this.state.app.options.length > 0 ? "here are the options" : "no options" } 
    </p>
   <button onClick = {this.makeDecission} disabled = {this.state.app.options.length === 0}>what should i do?  </button>
    <button onClick = {this.removeAll}>RemoveALL </button>

      
    <ol>
       {
        
        this.state.app.options.map((option) => { return <li key={option}> {option} </li> })
              
        }  
    
    </ol>
       <form onSubmit = {this.onFormSubmit}>

       <input type="text" name="option"/>
       <button >Add option </button>

       </form>

       
      </div>
    );
  }
}

export default FormExample;
