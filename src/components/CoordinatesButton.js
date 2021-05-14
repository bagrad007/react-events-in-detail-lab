// Code CoordinatesButton Component Here
import React from "react"

export default class CoordinatesButton extends React.Component {

    takeClick(e) {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            <button onClick={(e) => this.takeClick(e)}>Button</button>
        )
    }
}