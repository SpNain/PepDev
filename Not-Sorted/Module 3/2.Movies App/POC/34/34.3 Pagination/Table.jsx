import Pagination from "./Pagination";
import React from "react";
import "./Table.css";

class Table extends React.Component {
  state = {
    currPage: 2,  // this will show the active page
  };

  // iss code se sort of currPage active dhikega
  // select page ek fxn h aur iss fxn ko humne Paginaition.jsx ko pass kr rkha h as props
  // iss fxn ko Pagination.jsx se call lgegi aur ek value parameters me bheji jaayegi
  // joki wo element hoga jispe click kiya h (ab jispe click kiya h whi to active dhikhna chahiye na)
  // jo value aayegi us value ko ye fxn state ke currPage me set kr dega
  selectPage = (value) => {
    this.setState({ currPage: value });
  };

  render() {
    let allMovies = this.props.moviesData;
    let currFilter = this.props.selectedFilter;

    let filteredMoviesArr = allMovies.filter((el) => {
      if (currFilter === "All Genre") {
        return el;
      } else if (el.genre.name === currFilter) {
        return el;
      }
    });

    // hume jo result aayega uski ceil value leni h 
    // jaise ki agr 9 movies h aur kyunki hum har page pe 4 movies dhikha rhe h to
    // 9/4 = 2.25 | ab 2.25 ki ceil value hogi 3
    // agr 12 movies hoti to 12/4 = 3 | 3 ki ceil value hoti 3
    let numberOfPages = Math.ceil(filteredMoviesArr.length / 4);

    // startIndex aur endIndex humne kaise nikale ?
    // observe krke : refer Pagination.pdf for more details
    let startIndex = (this.state.currPage - 1) * 4;
    let endIndex = Math.min(filteredMoviesArr.length, this.state.currPage * 4);

    let arrToBeUsedInTable = filteredMoviesArr.slice(startIndex, endIndex);

    return (
      <>
        <div class="row">
          <div class="col-10">
            <table class="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {arrToBeUsedInTable.map((el) => {
                  return (
                    <tr key={el._id}>
                      <td>{el.title}</td>
                      <td>{el.genre.name}</td>
                      <td>{el.numberInStock}</td>
                      <td>{el.dailyRentalRate}</td>
                      <td
                        onClick={() => {
                          this.props.toggleLike(el._id);
                        }}
                      >
                        {el.liked ? (
                          <span class="material-icons-outlined">favorite</span>
                        ) : (
                          <span class="material-icons-outlined">
                            favorite_border
                          </span>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.deleteMovie(el._id);
                          }}
                          className="table-delete-btn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          selectPage={this.selectPage}   // sending selectPage fxn as prop
          currPage={this.state.currPage} // sending currPage as prop
          numberOfPages={numberOfPages}  // sending numberOfPages as prop
        />
      </>
    );
  }
}

export default Table;
