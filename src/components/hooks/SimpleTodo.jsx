import React, { useState, useReducer } from "react";


function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
    
        default:
            break;
    }
}


export default function SimpleTodo() {
    const [text, setText ] = useState('');
    const [state, dispatch] = useReducer(reducer, [{ text: 'hello' }])

    function handleChange(e){
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: 'add', payload: { text } })
    }

    return (
        <div>
            <h1>Simple Todo</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <button>+</button>
            </form>
            <ul>
            {!!state && state.map((e, index) => (
                <li key={index}>{e.text}</li>
            ))}
            </ul>
        </div>
    )
}