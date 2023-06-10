import React, { Component } from "react";
import Square from "./Square";
import "../index.css";

class Board extends Component{
    //user defined method or function to render Square component in Board component
    renderSquare(i){//Using i we will try to pass data to Square component
        //Passing data from one component to another component
        return <Square value={i}/>; //returning the Square component with value of i
    }
    //built in method or function
    render(){
        const status = 'Next player: X';
        return(
            <div>
                    <div className="status">{status}</div> 
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
            </div>

            );
    }
}

export default Board;