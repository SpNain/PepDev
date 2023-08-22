import Pagination from "./Pagination";  // import Pagination component

let Table = (props) => {

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
              {props.moviesData.map((el) => {
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
      <Pagination />  {/*added pagination component */}
    </>
  );
};

export default Table;

/*
hume table head ke liye to fixed tr bnali
aur baaki rows bnane ke liye humne props ke data pe map maar diya
aur kyunki yha rows ki list h to saari tr ko unique ids dedi

ye bootstrap se bnayi hui ui me changes kiye h hume
ye basically hume dynamic table rows bnake dega 
props me jo moviesData aaya hoga uspe map maarke
*/