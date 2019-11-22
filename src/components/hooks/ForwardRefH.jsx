import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const ForwardRef = forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
    }));

    return <input ref={inputRef} {...props}/>
})

export default function ForwardRefH() {
    const inputRef = useRef(null);

    function Click() {
        inputRef.current.focus();
    }

    return (
        <div>
            <ForwardRef ref={inputRef}/>
            <button onClick={Click}>Click</button>
        </div>
    )
}