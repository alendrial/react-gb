import React, { Component} from 'react';

export class Message extends Component {
    render() {
        return <>
           <p className="message">
            {props.message}
        </p>
        </>
    }
}