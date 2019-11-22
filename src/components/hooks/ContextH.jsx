import React, { useContext } from 'react';


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

const ThemeContext = React.createContext(themes.light);

function ThemeButton() {
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled theme context
        </button>
    )
}

function Toolbar(props) {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}

export default function ContextH() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}