import React from 'react';


const Input = React.forwardRef((props, ref) => (
    <input type="text" ref={ref} />
))


export default class FowardRef extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            value: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ value: this.inputRef.current.value })
    }

    render() {
        return (
            <div>
                <h1>React Ref - fowardRef</h1>
                <h3>Value: {this.state.value}</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input ref={this.inputRef}/>
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}