import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Search from "./Search"; // imported search component
import Table from "./Table"; // imported table component

class App extends React.Component {
  state = {
    movies: [],
    genre: [],
  };

  componentDidMount() {
    let f = async () => {
      let responseGenre = await fetch("http://localhost:4000/genre");
      let responseMovies = await fetch("http://localhost:4000/movies");
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

        <div className="row">
          <Filter genreData={this.state.genre} />

          {/* humne ek div bnaya aur usko class col-9 p-4(bootstrap wali) dedi
              search aur table components isi div me aayenge
          */}
          <div class="col-9 p-4">
            <Search /> {/*added search component */}

            {/* hume to movies ka data h wo table ko bhejna tha rows bnane ke liye
            to props ki help se bhej diya */}

            <Table moviesData={this.state.movies} />  {/*added table component */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/*
to ab hoga kuch aise ki pahle app chalega tb tk koi data nhi aaya hoga
to table,filter me kuch bhi show nhi hoga
kyunki movies aur genre empty array honge aur unpe map maarne se koi li ya tr nhi bnegi
fir thodi der baad data aa jaayega componentDidMount me to wo data movies aur genre me assign hoga
to state change hogi aur ui firse re-render hoga
tb fir hume ui pe movies aur genre show honge 
*/
