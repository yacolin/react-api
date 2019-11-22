import React, { useRef, useState } from 'react';

export default function RefH() {
    const [change, setChange] = useState('');
    const [value, setValue] = useState('');
    const textInput = useRef();

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setChange(textInput.current.value);
    }

    return (
        <div>
            <h1>React Ref - createRef Hooks</h1>
            <h3>Value: {change}</h3>
            <h3>Change: {value}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={textInput} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}