import React from "react";
import Child from "./Child";

class App extends React.Component {
  constructor(props) { // constructor ko props pass hote h (bas pass hote h to hote h yhi syntax h)
    super(props); // yha super react ke constructor ko call lga rha h yani react ko data bhej rha h 
    console.log("constructor was called"); // called first and once
    this.state = {  // agr humne constructor bnaya h to hume state uske andar hi likhni pdegi
      on: false,
    };
  }

  componentDidMount() {
    console.log("component did mount was called"); // called after constructor was called and only once
  }

  componentDidUpdate() {
    console.log("component did update was called");  // every time we change state (using click button)
  }


  render() {
    console.log("render was called");
    return (
      <div>
        <button
          onClick={() => {
            if (this.state.on) {
              this.setState({ on: false });
            } else {
              this.setState({ on: true });
            }
          }}
        >
          click
        </button> 
      </div> // click button state ko change krta h 
             // jiska use krke hum verify krte h ki kya haar baar state change hone pe component did update chlta h ya nhi
    );
  }
}

export default App;
