import React, { Component, Fregment } from "react";
import Squere from "./Squere";

export class Bord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsTrue: true,
      player1: "Roni",
      player2: "Ester",
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    console.log(squares);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsTrue ? "X" : "O";

    this.setState({
      squares: squares,
      xIsTrue: !this.state.xIsTrue,
    });
  }

  renderSquere = (i) => {
    return (
      <Squere
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  };

  render() {
    let winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      winner === "X"
        ? (winner = this.state.player1)
        : (winner = this.state.player2);
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsTrue ? "Roni" : "Elia");
    }
    return (
      <div className="">
        {" "}
        <div className="status">{status}</div>
        <div className="wraper">
          {this.renderSquere(0)}
          {this.renderSquere(1)}
          {this.renderSquere(2)}
          {this.renderSquere(3)}
          {this.renderSquere(4)}
          {this.renderSquere(5)}
          {this.renderSquere(6)}
          {this.renderSquere(7)}
          {this.renderSquere(8)}
        </div>
      </div>
    );
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

export default Bord;
