import Pagination from "./Pagination";

let Table = (props) => {
  console.log(props);  // props me moviesData aur selectFilter mila

  let allMovies = props.moviesData;  // moviesData ko allMovies var me store krwa liya
  let currFilter = props.selectedFilter;  // selectedFilter ko currFilter var me store krwa liya

  // fir allMovies pe filter maar diya
  // jisse wo allMovies me pde objects ko ek ek krke fxn me pass krega
  // ab agr currFilter "All Genre" h to simply el return krna h
  // lekin agr currFilter kuch or h to fir us el ke genre ka naam check krte h
  // aur agr us el ka genre aur currFilter equal hote h tbhi us element ko return krte h
  // is triker se hmare pass genre ke hisab se filteredMoviesArr aa jata h 
  let filteredMoviesArr = allMovies.filter((el) => {
    if (currFilter == "All Genre") {
      return el;
    } else if (el.genre.name == currFilter) {
      return el;
    }
  });

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
              {/*aur fir isi filteredMoviesArr pe map maarke table ki rows bnate h */}
              {filteredMoviesArr.map((el) => {
                return (
                  <tr key={el._id}>
                    <td>{el.title}</td>
                    <td>{el.genre.name}</td>
                    <td>{el.numberInStock}</td>
                    <td>{el.dailyRentalRate}</td>
                    <td>like</td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Table;
