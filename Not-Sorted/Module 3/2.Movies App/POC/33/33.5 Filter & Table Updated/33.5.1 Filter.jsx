import React from "react";

class Filter extends React.Component {
  state = {
    selectedFilter: "All Genre",
  };
  
  render() {
    return (
      <div class="col-3">
        <ul class="list-group m-4">
          <li
            onClick={() => {
              this.setState({ selectedFilter: "All Genre" });
            }}
            class={`list-group-item ${
              this.state.selectedFilter == "All Genre" ? "active" : ""
            }`}
          >
            All Genre
          </li>
          {this.props.genreData.map((el) => {
            return (
              <li
                onClick={() => {
                  this.setState({ selectedFilter: el.name });
                }}
                key={el._id}
                class={`list-group-item ${
                  this.state.selectedFilter == el.name ? "active" : ""
                }`}
              >
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
};

export default Filter;

/*
HUMNE YHA PE KYA KIYA HAI : 

humne yhape lis pe onClick fxn lga diya h 
isse hoga ye ki maanlo kisi filter click kiya
to wo filter ka naam selectedFilter me assign ho jaayega jisse state change hogi
ab yhape humne active class ko logic ke saath lga rkha h
aur kyunki state change hui to render dobara se chalega
aur ternary statements dobara se execute hogi

ab maanlo humne click kiya `All Genres` par
to selectedFilter me `All Genre` aa gya 
code firse chla aur kyunki this.state.selectedFilter is equal to `All Genres`

this.state.selectedFilter == "All Genre" ? "active" : ""
to is line ki wjah se `All Genres` pe active class lg jaayegi

ab maanlo fir uske baad humne click kar diya `Action` par
to selectedFilter me `Action` aa gya 
code firse chla aur kyunki this.state.selectedFilter is equal to `Action`

this.state.selectedFilter == "All Genre" ? "active" : ""
to is line ki wjah se All Genre pe se active ht gya 

this.state.selectedFilter == el.name ? "active" : ""
ab `Action` ke liye el.name ki jagah `Action` set ho rkha hoga
to isiliye fir is line ki wjah se `Action` pe active class lg jaayegi
*/