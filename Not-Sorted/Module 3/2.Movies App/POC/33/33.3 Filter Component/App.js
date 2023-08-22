import React from "react";
import Navbar from "./Navbar";
import Navbar from "./Filter";  // imported filter

class App extends React.Component {
  state = {
    movies: [],
    genre: [],
  };

  componentDidMount() {
    let f = async () => {
      let responseGenre = await fetch("/genre");
      let responseMovies = await fetch("/movies");
      let moviesJson = await responseMovies.json();
      let genreJson = await responseGenre.json();

      this.setState({
        movies: moviesJson,
        genre: genreJson,
      });
    };

    f();
  }

  render() {
    return (
      <div>
        <Navbar />

        {/* humne ek div bnaya aur usko class row(bootstrap wali) dedi 
            hume to genre ka data h wo filter ko bhejna tha list bnane ke liye 
            to props ki help se bhej diya
        */}
        <div className="row">
          <Filter genreData = {this.state.genre}/>
        </div>
        
      </div>
    );
  }
}

export default App;