import React from "react";

let Filter = (props) => {
  return (
    <div class="col-3">
      <ul class="list-group m-4">
        <li
          onClick={() => {
            props.handleFilter("All Genre");  
          }}
          class={`list-group-item ${
            props.selectedFilter == "All Genre" ? "active" : ""
          }`}
        >
          All Genre
        </li>
        {props.genreData.map((el) => {
          return (
            <li
              onClick={() => {
                props.handleFilter(el.name);
              }}
              key={el._id}
              class={`list-group-item ${
                props.selectedFilter == el.name ? "active" : ""
              }`}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;


/*
Humne is filter ki state ko lift up krke app.js me daal diya h
taki whi data table component ko bhi diya jaa ske using props

to ab filter ko us data ka use krna tha lekin state to app me chli gyi
to ab child filter ko fxn ka use krke parent app se kaam krwana pdega

to ab jaise hi kisi filter pe click hota h to handleFilter ko call lgti h
aur jis filter pe click hua h wo filter ka naam args me pass kr dete h
*/