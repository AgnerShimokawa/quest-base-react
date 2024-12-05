import React from 'react'

const CapitalizingAndColoring = ({color}) => {
    return (
        <p className='paragraph' style={{ color: color, textTransform: 'uppercase'}}>
            Here is a random paragraph to be capitalized and colored using JS and React!!
        </p>
    )
}

CapitalizingAndColoring.defaultProps = {
    color: 'white'
}

export default CapitalizingAndColoring;