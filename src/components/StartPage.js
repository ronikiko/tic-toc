import React, { Component } from 'react'

import Bord from '../Bord'
import Playes1 from './Player1'
import Playes2 from './Player2'

class StartPage extends Component {
    state = {
        step: 1,
        player1: '',
        player2: '',
        err: ''
    }

    getPlayersName = input => e => {
        if (e.target.value !== '') {
            this.setState({ err: '' })
        }
        this.setState({ [input]: e.target.value })
    }
    nextStep = () => {
        if (this.state.player1 === '') {
            this.setState({ err: 'Required Filed' })
            return false
        }
        else if (this.state.step === 2 && this.state.player2 === '') {
            this.setState({ err: 'Required Filed' })
            return false
        }
        else {
            this.setState({ err: '' })
            this.setState({ step: this.state.step + 1 })
        }

    }

    prevtStep = () => {
        this.setState({ step: this.state.step - 1 })
    }

    startAllOver = () => {
        this.setState({ step: 1, player1: '', player2: '' })
    }

    render() {
        const { step } = this.state
        switch (step) {
            case 1:
                return <Playes1
                    err={ this.state.err }
                    player1={ this.state.player1 }
                    nextStep={ this.nextStep }
                    getPlayersName={ this.getPlayersName } />
            case 2:
                return <Playes2
                    err={ this.state.err }
                    player2={ this.state.player2 }
                    nextStep={ this.nextStep }
                    prevStep={ this.prevtStep }
                    getPlayersName={ this.getPlayersName } />
            case 3:
                return <Bord players={ this.state } start={ this.startAllOver } />
            default:
                return <Playes1
                    err={ this.state.err }
                    player1={ this.state.player1 }
                    nextStep={ this.nextStep }
                    getPlayersName={ this.getPlayersName } />
        }

    }
}


export default StartPage
