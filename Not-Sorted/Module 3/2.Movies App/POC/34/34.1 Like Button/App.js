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

  // ye code se like ka button togle hoga means movie like aur unlike hogi
  // is fxn ko hum as props table.jsx ko pass kr rkha h
  // is fxn ko table.jsx se call lgegi aur ek id pass hogi
  // wo id us movie ki hogi jis movie ki row wale heart pe click hua h
  // is fxn ko id milte h ye movies arr pe findIndex chla dega 
  // findIndex ek fxn h jo index return krta h 
  // isme hume ek fxn pass krna hota h aur wo fxn jo value return krega fir findIndex us value ka arr me index btayega agr value arr me nhi hogi to -1 dega
  // to sbse pahle fxn execute hoga aur us fxn me ek ek krke movies arr ke saare el pass honge aur jis el ki id jo id parameters me aayi usse match hogi wo el return kr diya jaayega
  // ab findIndex ko el mil chuka hoga aur findIndex us el ka index return kr dega
  // jisse index me store krwa liya h

  // ab humne movies arr ki copy bnali map maarke taki koi bhi changes kre to pahle us copy me changes naki sidha direct state ke movies arr me
  // ab hum check krte h ki jo index hume mila h us index wale element me liked key h ki nhi
  // agr h to is matlab h use pahle like kiya hua tha use false krdo
  // aur agr nhi h to iska matlab use first time like kiya h to usme liked key ko true krdo(lekin kyunki liked key nhi thi to pahle use bnaya jaayega aur fir use true assign hoga)
  // ab agr liked ke hui lekin false hui to bhi else me hi jaane wale h iska matlab else se hume 2 case handle kr liye ekto agr key na ho aur dusra agr key ho aur false ho
  
  // last me fir hum in changes wale currMoviesArr ko original movies arr me assign kra dete h

  //hum chahte to sidha original movies arr me changes kr skte the lekin hume aisa nhi krna chahiye ye shi practice nhi h
  // hume pahle us arr ki copy bnani chahiye aur fir usme changes krke us copy ko origina me assign krna chahiye
  toggleLike = (id) => {
    let index = this.state.movies.findIndex((el) => {
      return el._id == id;
    });

    let currMoviesArr = this.state.movies.map((el) => el);

    if (currMoviesArr[index].liked) {
      currMoviesArr[index].liked = false;
    } else {
      currMoviesArr[index].liked = true;
    }

    this.setState({ movies: currMoviesArr });
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
              toggleLike={this.toggleLike}  // sending toggleLike as props
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
