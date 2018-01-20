import React, { Component } from 'react';

class BuildVisible extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Visiblity:false
    }
  }

showDetails = () => {

this.setState((prevState)=> {

  return {

    Visiblity:!prevState.Visiblity
  }
})
}
 

  render() {
    return (
      <div >

      <h1>Visiblity Toggle</h1>


      <button onClick={this.showDetails}> {this.state.Visiblity ? "hide details" : "show details"}

      </button>

      {this.state.Visiblity && (
     <div>
       
       <p> hey..here are the details info </p>

     </div>
       
        )}

        </div>
    );
  }
}

export default BuildVisible;
