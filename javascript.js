let newGame = document.querySelector('.newGame');
let gameboard = document.querySelector('.gameboard');
let message = document.querySelector('.message');



function startGame(){
    let arrayMark = [];
    let assignId1 = 1;
    let assignId2 = 1;
    let turn = 0;

    gameboard.innerHTML = '';

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

            } else {
                
                cell.textContent= 'O';
                cell.disabled =true;
                
                for (let i=1;i<10; i++){
                    if (arrayMark[i-1] == cell.id){
                        arrayMark[i-1] = 'O';
                    }
                }
            }

            turn++;
            
        })

    }

    
}


