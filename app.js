const container = document.getElementById('container')  
const containerWidthHeight=1024;
const gridSize=16;
function createGrid(gridSize){
    for(let i=0;i<gridSize*gridSize;i++){
        let newDiv = document.createElement('div');
        container.appendChild(newDiv).classList.add('grid-item');
        console.log();
    }
    gridCell=document.querySelectorAll('.grid-item');
    gridCell.forEach(cell => {
        cell.style.width = `${containerWidthHeight/gridSize}px`;
        cell.style.height= `${containerWidthHeight/gridSize}px`;
    })
}

createGrid(gridSize);