import React from 'react'
import style from 'styles/button.module.scss'

export enum BUTTON_TYPE {
    LOCATION = 'location',
    NOTIFICATION = 'notifications',
    USER = 'user',
    CATEGORY = 'category',
    DEFAULT = 'default',
}

interface ButtonProps {
    onClick: () => void
    children: React.ReactElement
    type: BUTTON_TYPE
    backgroundColor?: string
    fontColor?: string
}

const buttonTypeHandler = (type: BUTTON_TYPE): string => {
    switch (type) {
        case BUTTON_TYPE.LOCATION:
            return style.location
        case BUTTON_TYPE.NOTIFICATION:
            return style.notifications
        case BUTTON_TYPE.USER:
            return style.user
        case BUTTON_TYPE.CATEGORY:
            return style.category
    }
    return BUTTON_TYPE.DEFAULT
}

const Button = ({
    onClick,
    children,
    type,
    fontColor,
    backgroundColor,
}: ButtonProps) => {
    return (
        <button
            style={{ color: fontColor, backgroundColor: backgroundColor }}
            className={buttonTypeHandler(type)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
