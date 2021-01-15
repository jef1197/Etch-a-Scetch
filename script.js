const gridContainer = document.querySelector("#grid-container");
let currentColor = "Rainbow";


function gridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    

    for(let i = 0; i < size ** 2; i++) {
        let gridCell = document.createElement("div");
        gridCell.classList = "grid-cell";
        gridCell.addEventListener("mouseover", colorChange);
        gridContainer.appendChild(gridCell);
    }
}

function colorChange(e) {
    let RGB1 = Math.floor(Math.random() * 256)
    let RGB2 = Math.floor(Math.random() * 256)
    let RGB3 = Math.floor(Math.random() * 256)
    switch(currentColor){
        case "Default":
            e.target.style.backgroundColor = `rgb(0,0,0)`;
            break;
        case "Rainbow":
            e.target.style.backgroundColor = `rgb(${RGB1}, ${RGB2}, ${RGB3})`;
            break;
        case "Eraser":
            e.target.style.backgroundColor = `rgb(255,255,255)`;
            break;
    }
}

function clearGrid(){
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((e) => {
        gridContainer.removeChild(e);
    });
}

let changeSize = document.querySelector('#changeSize');
changeSize.addEventListener('click', () => {
    let size =  prompt("Enter size between 1-100" , "16");
    let sizeInt = parseInt(size);
    if (sizeInt < 100 && sizeInt > -1){
        clearGrid();
        gridSize(sizeInt);
    } else {
        alert("Inccorect size input")
    }

});

let black = document.querySelector('#black');
black.addEventListener('click', () => {
    currentColor = "Default"
});

let rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', () => {
    currentColor = "Rainbow"
});


let eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
    currentColor = "Eraser"
});


gridSize(16);