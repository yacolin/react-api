import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    render() {
        return (
            <div>
                <p>{this.state.count}</p>
            </div>
        )
    }
}