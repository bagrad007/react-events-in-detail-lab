// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

    handleDelay(e) {
        setTimeout(this.props.delay){
            this.props.onDelayedClick()
        }
    }

    render() {
        return (
            <button onClick={(e) => this.handleDelay(e)}>Delayed</button>
        );
    }
}

export default DelayedButton;
