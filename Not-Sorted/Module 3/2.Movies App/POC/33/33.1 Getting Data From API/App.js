import React from "react";

class App extends React.Component {
  
  state = {
    movies: [],
    genre: [],
  };

  componentDidMount() {

    //what are we doing here [#1]

    let f = async () => {
      let responseGenre = await fetch("/genre");  // [#2]
      let responseMovies = await fetch("/movies");
      let moviesJson = await responseMovies.json(); // [#3]
      let genreJson = await responseGenre.json();

      this.setState({
        movies: moviesJson,
        genre: genreJson,
      });
    };

    f();
  }

  render() {
    return <div></div>;
  }
}

export default App;

/*
#1.
hum data componentDidMount me mangwa rhe h kyunki render ke baad yhi fxn excecute hota h
to hum kya krte h ki ek async fxn bnate h aur usko call lga dete h
async isiliye kyunki uske andar async kaam ho rha h
fir hum api ka link deke data magnwate h
aur fir us data me se json data nikal lete h
aur fir respective data ko unki respective states me assign kr dete h

#2.
fecth() :
agr hum file use kr rhe h data ke liye to isme hum path dete h us file ka 
agr hum api use kr rhe h data ke liye to isme hum link dete h us api ka 
This is a async fxn, so its gives a promise.

#3.
resObj.json() :
Jab bhi hum fecth() ya koi or type ki request maarte h 
To hum response me ek object milta h jiske andar kaafi saari chije hoti h
To json() fxn us response object me se json data nikal leta h aur parse krke hume as a result de deta h


*/