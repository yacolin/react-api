import React, { useState, useEffect } from 'react';

export default function GreetingH() {
    const name = useFormInput('mary');
    const secName = useFormInput('bob');
    const width = useWindowWith();



    return (
        <>
            <h1>Hooks</h1>
            <div>
                <label>name: </label>
                <input type="text" {...name}/>
            </div>
            <div>
                <label>name: </label>
                <input type="text" {...secName}/>
            </div>
            <p>width: {width}</p>
        </>
    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}

function useWindowWith() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    })

    return width;
}