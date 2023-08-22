import React from "react";
import Child from "./Child";

class App extends React.Component {
  state = {
    child: true,
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            if (this.state.child) {
              this.setState({ child: false });
            } else {
              this.setState({ child: true });
            }
          }}
        >
          child toggle
        </button>

        {this.state.child ? <Child /> : ""}

        
      </div>
    );
  }
}

export default App;

/*
child toggle state ko change krta h 
aur us state ke basis pe ye decide hota h ki child component ko dhikhana h ya nhi
agr this.state.child true hota h to fir div ke andar child component rkhna h jisse wo ui pe dhikhega
agr false aata h to "" rkhni h means child component nhi rkha jisse wo ui se ht jaaye

iska use krke hum component will unmount ko test kr rhe h
*/