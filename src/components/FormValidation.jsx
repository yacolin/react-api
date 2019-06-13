import React from 'react';



export default class FormValidation extends React.Component {
    constructor(props) {
        super(props);

        this.username = React.createRef();
        this.password = React.createRef();
        this.state = {
            errors: []
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const username = this.username.current.value;
        const password = this.password.current.value;
        const errors = this.handleValidation(username, password);

        if (errors.length > 0) {
            this.setState({ errors })
            return;
        }
        
        // submit data
    }


    handleValidation = (username, password) => {
        const errors = [];

        if (username.length === 0) {
            errors.push("Username cannot be empty");
        }

        if (password.length < 6) {
            errors.push("Passwod should be at least 6 characters long");
        }


        return errors;
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <h1>React Ref Example</h1>
                <form onSubmit={this.handleSubmit}>
                    {errors.map(error => <p key={error}>{error}</p>)}
                    <div>
                        <label>Username:</label>
                        <input type="text" ref={this.username}/>
                    </div>

                    <div>
                        <label>Password:</label>
                        <input type="text" ref={this.password}/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}