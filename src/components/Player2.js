import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class Player2 extends Component {
    render() {
        const { nextStep, prevStep, getPlayersName, player2 } = this.props
        return (
            <div>
                <h1>Player 2</h1>
                <h5 style={ { color: 'red' } }>{ this.props.err }</h5>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Please Enter Your Name:</Form.Label>
                    <Form.Control type="text" value={ player2 } name="player2" placeholder="player 2 name" onChange={ getPlayersName('player2') } />
                    <Form.Text className="text-muted">
                        Second player name
                    </Form.Text>
                </Form.Group>
                <Button
                    block={ true }
                    variant='primary'
                    onClick={ nextStep }>
                    Let Start To Play
                    </Button>
                <Button
                    block={ true }
                    variant='secondary'
                    onClick={ prevStep }>
                    Back
                    </Button>
            </div>
        )
    }
}

export default Player2
