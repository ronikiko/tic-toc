import React, { Component } from 'react'
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
    if(squares[i]) return
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

export default Bord
