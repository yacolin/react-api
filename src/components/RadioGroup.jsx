import React from 'react';

export function Radio(props) {
    return (
        <div>
            <input type="radio" id={props.value} {...props} />
            <label htmlFor={props.value}>{props.value}</label>
        </div>
    )
}

export default class RadioGroup extends React.Component {

    handleClick = (e) => {
        console.log(e.target.value);
    }
    

    render() {
        const { children, name } = this.props;

        return React.Children.map(children, child => {
            return React.cloneElement(child, {
                name: name,
                onClick: this.handleClick
            })
        })
    }
}