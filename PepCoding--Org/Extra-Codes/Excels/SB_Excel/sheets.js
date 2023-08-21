let addSheetBtn = document.querySelector(".add-sheet");
let sheetsList = document.querySelector(".sheets-list");
let defaultSheet = document.querySelector(".sheet");
let sheetId = 0;

addSheetBtn.addEventListener("click", function () {
  addSheet();
});

defaultSheet.addEventListener("click", function () {
  switchSheet(defaultSheet);
});

function addSheet() {
  document.querySelector(".active-sheet").classList.remove("active-sheet");
  sheetId++;
  let sheetDiv = document.createElement("div");
  sheetDiv.classList.add("sheet");
  sheetDiv.classList.add("active-sheet");
  sheetDiv.setAttribute("sid", sheetId);
  sheetDiv.innerHTML = `Sheet ${sheetId + 1}`;
  sheetsList.append(sheetDiv);

  sheetDiv.addEventListener("click", function () {
    switchSheet(sheetDiv);
  });

  // remove all the data from current db cells
  cleanUI();
  initDB();
  // initCells();
  // attachEventListeners();

  lastSelectedCell = undefined;
}

function switchSheet(currentSheet) {
  if (currentSheet.classList.contains("active-sheet")) {
    return;
  }
  document.querySelector(".active-sheet").classList.remove("active-sheet");
  currentSheet.classList.add("active-sheet");

  cleanUI();

  //setDB
  let sid = currentSheet.getAttribute("sid");
  db = sheetsDB[sid].db;
  visitedCells = sheetsDB[sid].visitedCells;

  // setUI ??
  // let lastCellIndex = 0;
  // for (let i = 0; i < db.length; i++) {
  //   let dbRow = db[i];
  //   for (let j = 0; j < dbRow.length; j++) {
  //     allCells[lastCellIndex].textContent = dbRow[j].value;
  //     lastCellIndex++;
  //   }
  // }
  // set UI optimized
  for (let i = 0; i < visitedCells.length; i++) {
    let { rowId, colId } = visitedCells[i];
    let idx = Number(rowId) * 26 + Number(colId);
    allCells[idx].textContent = db[rowId][colId].value;
    console.log("text-content set for ->" + rowId + "&" + colId);
    
    let cellObject = db[rowId][colId];
    let { bold, underline, italic } = cellObject.fontStyles;
    if (bold) {
      allCells[i].style.fontWeight = "bold";
      console.log("bold set");
    }
    if (underline) {
      allCells[i].style.textDecoration = "underline";
    }
    if (italic) {
      allCells[i].style.fontStyle = "italic";
    }
    console.log("fontstyle set for ->" + rowId + "&" + colId);
    let textAlign = cellObject.textAlign;
    allCells[i].style.textAlign = textAlign;
    console.log("text-align set for ->" + rowId + "&" + colId);

    //==========================================

    

    //==========================================
  }
}

function attachEventListeners() {
  topLeftCell = document.querySelector(".top-left-cell");
  topRow = document.querySelector(".top-row");
  leftCol = document.querySelector(".left-col");
  allCells = document.querySelectorAll(".cell");
  attachClickAndBlurEventOnCell();
}

function cleanUI() {
  let allActiveMenus = document.querySelectorAll(".active-menu");
  if (allActiveMenus) {
    for (let i = 0; i < allActiveMenus.length; i++) {
      allActiveMenus[i].classList.remove("active-menu");
    }
  }
  for (let i = 0; i < visitedCells.length; i++) {
    let { rowId, colId } = visitedCells[i];
    let idx = Number(rowId) * 26 + Number(colId);
    console.log("ss-" + idx);
    console.log(allCells[idx].value);
    allCells[idx].innerHTML = "";
    allCells[idx].style = "";
  }
}
