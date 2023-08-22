import Pagination from "./Pagination";
import "./Table.css";  // imported Table.css

let Table = (props) => {

  let allMovies = props.moviesData;
  let currFilter = props.selectedFilter;

  let filteredMoviesArr = allMovies.filter((el) => {
    if (currFilter == "All Genre") {
      return el;
    } else if (el.genre.name == currFilter) {
      return el;
    }
  });

  // restrict 4 movies per page
  // filteredMoviesArr pe slice maar diya jisse ab 4 movies hi arrToBeUsedInTable me aa paayegi
  let arrToBeUsedInTable = filteredMoviesArr.slice(0, 4);

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

              {/* arr to be used pe map mara jisse sirf 4 movies ki hi rows bnegi */}
              {arrToBeUsedInTable.map((el) => {
                return (
                  <tr key={el._id}>
                    <td>{el.title}</td>
                    <td>{el.genre.name}</td>
                    <td>{el.numberInStock}</td>
                    <td>{el.dailyRentalRate}</td>
                    
                    {/* jaise hi heart pe click hoga to toggleLike ko el._id pass krke call lgayi jaayegi
                        aur fir wha App.js me changes krke jaise hi movies arr me changes save honge 
                        to re-render hoga kyunki state change hui h aur saara code dobara se chalega
                        aur rows bnate wkt heart wale me check hoga ki wo el me liked property check hogi
                        agr el.liked true aaya to filled heart wala span lgega
                        aur agr el.liked false/undefind aaya to hollow heart wala span lgega 
                    */}
                    <td
                      onClick={() => {
                        props.toggleLike(el._id);
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
                    <button className="table-delete-btn">Delete</button>  {/* added class to delete button for css */}
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
