import Board from "./Board";
import "../index.css";


function Game(){
    return(
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */} </div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>

    );
}


// const Game = ()=>{
//     return(
//         <div className="game">
//             <div className="game-board">
//                 <Board />
//             </div>
//             <div className="game-info">
//                 <div>{/* status */} </div>
//                 <ol>{/* TODO */}</ol>
//             </div>
//         </div>

//     );
// }
export default Game;