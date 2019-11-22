import React from 'react';

const themes = {
    light: {
        foreground: '#00',
        background: '#eee'
    },
    dark: {
        foreground: '#fff',
        background: '#222',
    }
}

const ThemeContext = React.createContext(themes.dark);

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;

        return (
            <button {...props} style={{ backgroundColor: theme.background }}/>
        )
    }
}

ThemedButton.contextType = ThemeContext;


function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

export default class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        }
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar />
                </ThemeContext.Provider>
                <ThemedButton>button</ThemedButton>
            </div>
        )
    }
}