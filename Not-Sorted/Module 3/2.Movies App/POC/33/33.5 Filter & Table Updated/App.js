import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {
  state = {
    movies: [],
    genre: [],
    selectedFilter: "All Genre",
  };

  setFilter = (filter) => {
    this.setState({ selectedFilter: filter });
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
          <Filter
            handleFilter={this.setFilter}
            selectedFilter={this.state.selectedFilter}
            genreData={this.state.genre}
          />

          <div class="col-9 p-4">
            <Search />
            <Table
              selectedFilter={this.state.selectedFilter}
              moviesData={this.state.movies}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;


/*
selectFilter jo pahle filter.jsx me tha ab use lift up krke app.js me daal diya h

aur hume setFilter ke naam se ek fxn bnaya h jisko ek filter milta h jisko wo selectFilter me assign kr deta h
aur ye setFilter humne filter component ko props me handleFilter ke naam se bheja h
to jaise hi filter.jsx me handleFilter ko call lgegi to setFilter fxn execute hoga
aur handleFilter me pass kiya gya filter selectedFilter me assign ho jaayega

ab hum table component ko moviesData ke saath saath selectFilter bhi bhejte h props me
taki filter aur table ke data ko sync me laaya jaa ske
*/
