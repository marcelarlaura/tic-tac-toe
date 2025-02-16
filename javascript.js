let newGame = document.querySelector('.newGame');
let gameboard = document.querySelector('.gameboard');
let message = document.querySelector('.message');



function startGame(){
    let arrayMark = [];
    let assignId1 = 0;
    let assignId2 = 0;
    let turn = 0;

    for (let i=0; i<9; i++){
        const cell = document.createElement('button');
        cell.id= `${assignId1}`;
        assignId1++;
        cell.textContent = cell.id;
        gameboard.append(cell);
        cell.addEventListener('click', markCell());
    }
    for (let i=0; i<9; i++){
        arrayMark[i] = `${assignId2}`;
        assignId2++;
    }
    
}

function markCell(){
    
}

