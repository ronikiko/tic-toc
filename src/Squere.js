import React, { Component } from 'react'
import './style.css'


export class Squere extends Component {
    
    render() {
        return (
           
            <div className="squere"  onClick={ () => this.props.onClick('x')}>
                {this.props.value}
            </div>
            
        )
    }
}

export default Squere
