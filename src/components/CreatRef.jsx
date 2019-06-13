import React from 'react';



export default class CreateRef extends React.Component {
    constructor(props) {
        super(props);


        this.textInput = React.createRef();
        this.state = {
            value: '',
            change: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.textInput);
        this.setState({ value: this.textInput.current.value });
    }

    handleChange = e => {
        console.log(e.target.value);
        this.setState({ change: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>React Ref - createRef</h1>
                <h3>Value: {this.state.value}</h3>
                <h3>Change: {this.state.change}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.textInput} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}