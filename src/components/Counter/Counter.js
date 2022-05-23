import React, { Component } from 'react'
import '../../index.css'

export default class Counter extends Component {
    state = {
        value: 0,
    }

    decrementValue = () => {
        if (this.state.value === 0) return
        this.setState(state => ({
            value: state.value - 1
        }))
    }

    incrementValue = () => {
        this.setState(state => ({
            value: state.value + 1
        }))
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Example of class component - Counter</h2>
                <button className="button" onClick={() => this.decrementValue()}>Decrement</button>
                <span className="counter">{this.state.value}</span>
                <button className="button" onClick={() => this.incrementValue()}>Increment</button>
            </div>
        )
    }
}
