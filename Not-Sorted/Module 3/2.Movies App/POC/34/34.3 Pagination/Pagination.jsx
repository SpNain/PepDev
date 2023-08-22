let Pagination = (props) => {

  /*
  Humne ek arr bnaya aur props me no of pages bhejte h ki movies kitne page me aa rhi h
  kyunki 1 page me sirf 4 hi movies aa skti h na
  to maanlo numberOfPages aaye 3
  to loop chalega aur arr kuch aisa bnjega [1,2,3]
  */
  let arr = [];
  for (let i = 1; i <= props.numberOfPages; i++) {
    arr.push(i);
  }

  return (
    // aur fir isi arr pe map maarke hum li bna dete h
    <nav>
      <ul class="pagination mt-4">
        {arr.map((el) => {
          return (
            
            <li
              // jaise hi kisi element pe click hoga to selectPage ko wo el pass krke call lg jaayegi
              // aur wha jaake ye fxn iss el ko state ke currPage me set krwa deta h call
              // ab kyunki state me change hua to re-render hoga
              // aur re-render hone ke karan ye code aur ternary statements firse execute honge
              // matlab ki props firse send honge aur abki baar props me currPage wo hoga jispe click kiya h
              // to fir execute hote time check hoga ki jo el h wo props me aaye currPage ke equal h ki nhi
              // agr h to use active krdo
              // iss trike se jis el pe hum click krenge wo active dhikega
              onClick={() => {
                props.selectPage(el);
              }}
              class={`page-item ${props.currPage === el ? "active" : ""}`}
            >
              <a class="page-link">{el}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
