// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

    handleDelay(e) {
        e.persist()
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={(e) => this.handleDelay(e)}>Delayed</button>
        );
    }
}

export default DelayedButton;
