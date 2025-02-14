const flexBox = document.querySelector(".flex-container")

function createRow(userSelectedNum) {
    let uniqueID = 0;
    for (i = 0; i < userSelectedNum; i++) {
        let rowToAdd = document.createElement("div");
        rowToAdd.setAttribute("class", "row");
        rowToAdd.setAttribute("id", "row" + i);
        flexBox.appendChild(rowToAdd);

        for (g = 0; g < userSelectedNum; g++) {
            uniqueID = uniqueID + 1;
            let squareToAdd = document.createElement("div");
            squareToAdd.setAttribute("id", "box" + uniqueID);
            squareToAdd.setAttribute("class", "square")
            rowToAdd.appendChild(squareToAdd);

        }
    }
}



createRow(16);

const squares = document.querySelectorAll("div.square");
let sstyle = '';
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        console.log(square.id);
        square.setAttribute("class", "changedSquare");
    })
});

squares.forEach((square) => {
    square.addEventListener("mouseout", () => {
        square.setAttribute("class", "square");
    })
});
