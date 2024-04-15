let game={
    score:0,
    currentGame:[],
    playerMoves:[],
    choices:["buttton1","button2","button3","button4"]
}

function newGame(){
    game.score=0;
    currentGame=[];
    playerMoves=[];

}

module.exports={game, newGame}
