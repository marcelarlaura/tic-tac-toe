let gameStart = (function (){

    console.log(`Menu / Options: \n
        gameStart.takeTurn()   - Player makes a move \n
        gameStart.switchTurn() - Assigns turn to play to another player \n
        gameStart.resetGame()  - Resets to a new match \n`
    );


    let playerX = prompt('Please enter name of player X');
    let playerO = prompt('Please enter name of player O');
    let pickedPlayer = playerX;
    let chosenSpot;
    let mark = 'X';

    let board =[null,null,null, null,null,null, null,null,null];

  
    function resetGame(){
        playerX = prompt('Please enter name of player X');
        playerO = prompt('Please enter name of player O');
        pickedPlayer = playerX;
        chosenSpot = null;
        mark = 'X';
    
        board =[null,null,null, null,null,null, null,null,null];
    }

    

    function switchTurn (){
        chosenSpot = null;
        if (pickedPlayer == playerO){
            pickedPlayer = playerX;
            mark = 'X';
        } else {
            pickedPlayer = playerO;
            mark = 'O';
        }
    }

    function takeTurn (){
        console.log(`It's ${pickedPlayer}'s turn!`);
        console.log(`\n
                    ${board[0]} ${board[1]} ${board[2]} \n
                    ${board[3]} ${board[4]} ${board[5]} \n
                    ${board[6]} ${board[7]} ${board[8]}`);
        while (!(Number.isInteger(chosenSpot)) || board[chosenSpot] != null
                || chosenSpot > 8 || chosenSpot < 0){
            chosenSpot = Number(prompt('pick an available spot of the board'));
        }

        board[chosenSpot] = mark;

        console.log(`\n
            ${board[0]} ${board[1]} ${board[2]} \n
            ${board[3]} ${board[4]} ${board[5]} \n
            ${board[6]} ${board[7]} ${board[8]}`);

        chooseWinner();
        

    }

    function checkAllCellsFilled(){
        let count = 0;
        for (let i=0; i<9; i++){
            if (board[i] != null){
                count++;
            }
        }
        if (count >= 8){
            console.log(`IT'S A TIE!`);
        }
    }

    function chooseWinner (){
        if (board[0] == board[1] && board[1] == board[2] && board[0] != null){
            if (board[0] == 'X'){
                console.log(`${playerX.toUpperCase()} HAS WON!`);
            } else {
                console.log(`${playerO.toUpperCase()} HAS WON!`); 
            }
        } else if (board[3] == board[4] && board[4] == board[5] && board[3] != null){
            if (board[3] == 'X'){
                console.log(`${playerX.toUpperCase()} HAS WON!`);
            } else {
                console.log(`${playerO.toUpperCase()} HAS WON!`); 
            }

        } else if (board[6] == board[7] && board[7] == board[8] && board[6] != null){
            if (board[6] == 'X'){
                console.log(`${playerX.toUpperCase()} HAS WON!`);
            } else {
                console.log(`${playerO.toUpperCase()} HAS WON!`); 
            }
        
        } else if (board[0] == board[3] && board[3] == board[6] && board[0] != null){
            if (board[0] == 'X'){
                console.log(`${playerX.toUpperCase()} HAS WON!`);
            } else {
                console.log(`${playerO.toUpperCase()} HAS WON!`); 
            }

        } else if (board[1] == board[4] && board[4] == board[7] && board[1] != null){
            if (board[1] == 'X'){
                console.log(`${playerX.toUpperCase()} HAS WON!`);
            } else {
                console.log(`${playerO.toUpperCase()} HAS WON!`); 
            }

        } else if (board[2] == board[5] && board[5] == board[8] && board[2] != null){
            if (board[2] == 'X'){
                console.log(`${playerX.toUpperCase()} HAS WON!`);
            } else {
                console.log(`${playerO.toUpperCase()} HAS WON!`); 
            }

        } else if (board[0] == board[4] && board[4] == board[8] && board[0] != null){
            if (board[0] == 'X'){
                console.log(`${playerX.toUpperCase()} HAS WON!`);
            } else {
                console.log(`${playerO.toUpperCase()} HAS WON!`); 
            }

        } else if (board[2] == board[4] && board[4] == board[6] && board[2] != null){
            if (board[2] == 'X'){
                console.log(`${playerX.toUpperCase()} HAS WON!`);
            } else {
                console.log(`${playerO.toUpperCase()} HAS WON!`); 
            }

        } else {
            checkAllCellsFilled();
        }

    }

    return {switchTurn, takeTurn,resetGame}

})();




