import React from 'react';



export default class RefString extends React.Component {
    constructor(props) {
        super(props);


        this.textInput = React.createRef();
        this.state = {
            value: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.refs);
        this.setState({ value: this.refs.textInput.value });
    }


    render() {
        return (
            <div>
                <h1>React Ref - String Ref</h1>
                <h3>Value: {this.state.value}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="textInput" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}