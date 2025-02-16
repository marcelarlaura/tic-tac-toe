let newGame = document.querySelector('.newGame');
let gameboard = document.querySelector('.gameboard');
let message = document.querySelector('.message');
let announcement = document.querySelector('.winner-announcement');



function startGame(){
    let arrayMark = [];
    let assignId1 = 1;
    let assignId2 = 1;
    let turn = 0;

    gameboard.innerHTML = '';

    message.textContent = "It's Player X's turn!";
    announcement.textContent = '';
    for (let i=1; i<10; i++){
        arrayMark[i-1] = `${assignId2}`;
        assignId2++;
    }

    for (let i=1; i<10; i++){
        const cell = document.createElement('button');
        cell.id= `${assignId1}`;
        assignId1++;
        cell.textContent = cell.id;
        gameboard.append(cell);
        cell.addEventListener('click', ()=>{
            if (turn % 2 == 0){
                
                cell.textContent = 'X';
                cell.disabled = true;

                for (let i=1;i<10; i++){
                    if (arrayMark[i-1] == cell.id){
                        arrayMark[i-1] = 'X';
                    }
                }

                message.textContent = "It's Player O's turn!";

            } else {
                
                cell.textContent= 'O';
                cell.disabled =true;
                
                for (let i=1;i<10; i++){
                    if (arrayMark[i-1] == cell.id){
                        arrayMark[i-1] = 'O';
                    }
                }
                message.textContent = "It's Player X's turn!";
            }

            turn++;

            checkWinner();
            
        })

        function checkWinner (){
            if (arrayMark[0] == arrayMark[1] && arrayMark[1] == arrayMark[2]){
                announcement.textContent = `HURRAY! PLAYER ${arrayMark[1]} HAS WON!`;
            } else if (arrayMark[3] == arrayMark[4] && arrayMark[4] == arrayMark[5]){
                announcement.textContent = `HURRAY! PLAYER ${arrayMark[4]} HAS WON!`;
            } else if (arrayMark[0] == arrayMark[4] && arrayMark[4] == arrayMark[8]){
                announcement.textContent = `HURRAY! PLAYER ${arrayMark[4]} HAS WON!`;
            } else if (arrayMark[6] == arrayMark[4] && arrayMark[4] == arrayMark[2]){
                announcement.textContent = `HURRAY! PLAYER ${arrayMark[4]} HAS WON!`;
            } else if (arrayMark[0] == arrayMark[3] && arrayMark[3] == arrayMark[6]){
                announcement.textContent = `HURRAY! PLAYER ${arrayMark[3]} HAS WON!`;
            } else if (arrayMark[1] == arrayMark[4] && arrayMark[4] == arrayMark[7]) {
                announcement.textContent = `HURRAY! PLAYER ${arrayMark[4]} HAS WON!`;
            } else if (arrayMark[2] == arrayMark[5] && arrayMark[5] == arrayMark[8]) {
                announcement.textContent = `HURRAY! PLAYER ${arrayMark[5]} HAS WON!`;
            } else if (arrayMark[6] == arrayMark[7] && arrayMark[7] == arrayMark[8]) {
                announcement.textContent = `HURRAY! PLAYER ${arrayMark[7]} HAS WON!`;
            } else {

                let checked = 0;
                for (let i=0; i<9; i++){
                    if (arrayMark[i] == 'O' || arrayMark[i] == 'X'){
                        checked++;
                    }
                }
                if (checked > 7){
                    announcement.textContent = "IT'S A TIE!";
                }

                return checked;
                
            }
        }

    }

    
}


