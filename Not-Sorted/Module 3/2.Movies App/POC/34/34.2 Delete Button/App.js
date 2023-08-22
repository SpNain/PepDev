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

  toggleLike = (id) => {
    let index = this.state.movies.findIndex((el) => {
      return el._id === id;
    });

    let currMoviesArr = this.state.movies.map((el) => el);

    if (currMoviesArr[index].liked) {
      currMoviesArr[index].liked = false;
    } else {
      currMoviesArr[index].liked = true;
    }

    this.setState({ movies: currMoviesArr });
  };

  // ye code se movies delete hogi
  // is fxn ko hum as props table.jsx ko pass kr rkha h
  // is fxn ko table.jsx se call lgegi aur ek id pass hogi
  // wo id us movie ki hogi jis movie ki row wale delete button pe click hua h
  // to deleteMovie chlte hi movies arr pe filter maarta h
  // filter ke andar ek fxn h jo wo elements return krega jiski id parameter me aayi id ke brabar na ho
  // to iss trh filter jis movie ke corresponding delete pe click hua usko movies arr me se filter kr deta h
  // aur fir filteredArr ko hum original movies arr me assign krwa dete h
  deleteMovie = (id) => {
    let filteredArr = this.state.movies.filter((el) => {
      return el._id !== id;
    });

    this.setState({ movies: filteredArr });
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
              deleteMovie={this.deleteMovie} // sending deleteMovie as props
              toggleLike={this.toggleLike}
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
