import React from 'react'

const showAlert = (label) => {
    window.alert(`This button's label is: ${label}`)
}

const Button = ({label}) => {
    return <button onClick={() => {showAlert(label)}}>{label}</button>
}

Button.defaultProps = {
    label: "Click Here"
}

export default Button;