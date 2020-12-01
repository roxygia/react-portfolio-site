import React from 'react'
import './Button.css';
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

//if there is a style or size applied use that, else apply first style or size in array

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];

    return (
        <Link to={onClick} className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            
            type={type}>
                {children}    
            </button>

        </Link>
    )
    
}
