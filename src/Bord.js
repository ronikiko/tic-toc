import React, { Component, Fregment } from 'react'
import Squere from './Squere'


export class Bord extends Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsTrue: true
        };
      }

    handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
        return;
      }
    squares[i] = this.state.xIsTrue ? 'X' : 'O';
    
    this.setState({
        squares: squares,
        xIsTrue: !this.state.xIsTrue,
      })
    }

    renderSquere = (i) => {
        return (
            <Squere 
                value={this.state.squares[i]} 
                onClick = { () => this.handleClick(i) }
            />
        )
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <>
            
                {this.renderSquere(0)}
                {this.renderSquere(1)}
                {this.renderSquere(2)}
                {this.renderSquere(3)}
                {this.renderSquere(4)}
                {this.renderSquere(5)}
                {this.renderSquere(6)}
                {this.renderSquere(7)}
                {this.renderSquere(8)}
            </>
            
        )
    }
}


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Bord


