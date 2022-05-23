import React, { PureComponent } from 'react'
import '../../index.css'

export default class DisplayName extends PureComponent {
    render() {
        return (
            <div className="wrapper">
                <h2>Example of pure class component - Display name</h2>
                <p>Hello my name is {this.props.name}</p>
            </div>
        )
    }
}
