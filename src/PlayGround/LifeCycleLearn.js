import React from 'react';

class LifeCycleLearn extends React.Component {

  constructor() {
    super();

    this.state = { text: "type here"}
    
  }

  changeHere = (e) => {

  	const data = e.target.value;
  	

   if (data) {
   	this.setState({text:data})
     }
    console.log(data)
}

  clear = (data) => {
 
    if(data){
 	this.setState ({text:""})
    }

  }
  
  render() {
    return (
    	<div>
         <textarea onChange={this.changeHere} 
          type="text" 
          name=""
          value={this.state.text} 
        > 
        </textarea>  
        <h3> lenght of the characters {this.state.text.length}</h3>

        <button onClick={this.clear}>clear textarea</button>
      </div>
    );
  }
}


export default LifeCycleLearn;