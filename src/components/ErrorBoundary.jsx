import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }


    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        // Normally, just render children
        return this.props.children;
    }
}


class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }))
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I Crashed!');
        }

        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
    }
}


export default class ErrorDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>   
                <p>
                    <b>
                        This is an example of error boundaries in React 16.
                        <br/><br/>
                        Click on the numbers to increase the counters.
                        <br/>
                        The Counter is programmed to throw when it reaches 5. This simulates a Javascript error in a component
                    </b>
                </p>
                <hr/>
                <ErrorBoundary>
                    <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                    <BuggyCounter />
                    <BuggyCounter />
                </ErrorBoundary>

                <hr/>
                <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
                <ErrorBoundary><BuggyCounter /></ErrorBoundary>
                <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            </div>
        )
    }
}