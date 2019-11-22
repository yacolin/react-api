import React from 'react';


export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'mary',
            secName: 'bob',
            width: window.innerWidth
        }
    }

    componentDidMount() {
        document.title = this.state.name + ' ' + this.state.secName;
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate() {
        document.title = this.state.name + ' ' + this.state.secName;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    handleChangeSec = (e) => {
        this.setState({
            secName: e.target.value
        })
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    render() {
        return (
            <>
                <h1>class</h1>
                <div>
                    <label>name: </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div>
                    <label>name: </label>
                    <input type="text" value={this.state.secName} onChange={this.handleChangeSec} />
                </div>                
                
                <p>width: {this.state.width}</p>
            </>
        )
    }
}