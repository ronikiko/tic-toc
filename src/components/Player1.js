import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
class Player1 extends Component {
    render() {
        const { nextStep, getPlayersName, player1 } = this.props
        return (
            <div>
                <h1>Player 1</h1>
                <h5 style={ { color: 'red' } }>{ this.props.err }</h5>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Please Enter Your Name:</Form.Label>
                    <Form.Control type="text" placeholder="player 1 name" value={ player1 } name="player1" onChange={ getPlayersName('player1') } />
                    <Form.Text className="text-muted">
                        first player name
                    </Form.Text>
                </Form.Group>
                <Button
                    block={ true }
                    variant='primary'
                    onClick={ nextStep }>
                    Next Player
                    </Button>
            </div>
        )
    }
}

export default Player1
