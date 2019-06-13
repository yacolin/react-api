import React from 'react';


const Input = props => {
    return (
        <div>
            <input type="text" ref={props.inputRef}/>
        </div>
    )
}

export default class RefChildren extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ value: this.inputElement.value });
    }


    render() {
        return (
            <div>
                <h1>React Ref - Callback Children Ref</h1>
                <h3>Value: {this.state.value}</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input inputRef={el => this.inputElement = el}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}