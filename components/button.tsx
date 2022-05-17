import React from 'react'
import style from 'styles/button.module.scss'

export enum BUTTON_TYPE {
    LOCATION = 'location',
    NOTIFICATION = 'notifications',
    USER = 'user',
    DEFAULT = 'default',
}

interface ButtonProps {
    onClick: () => void
    children: React.ReactElement
    type: BUTTON_TYPE
}

const buttonTypeHandler = (type: BUTTON_TYPE): string => {
    switch (type) {
        case BUTTON_TYPE.LOCATION:
            return style.location
        case BUTTON_TYPE.NOTIFICATION:
            return style.notifications
        case BUTTON_TYPE.USER:
            return style.user
    }
    return BUTTON_TYPE.DEFAULT
}

const Button = ({ onClick, children, type }: ButtonProps) => {
    return (
        <button className={buttonTypeHandler(type)} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
