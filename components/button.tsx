import style from 'styles/button.module.scss'
import Icon, { ICON_SIZE } from './icon'

export enum BUTTON_TYPE {
    LOCATION = 'location',
    DEFAULT = 'default',
}

interface ButtonProps {
    type: BUTTON_TYPE
    title: string
}

const Button = ({ type, title }: ButtonProps) => {
    return (
        <button
            className={
                type === BUTTON_TYPE.LOCATION
                    ? style.location
                    : BUTTON_TYPE.DEFAULT
            }
        >
            {BUTTON_TYPE.LOCATION && (
                <div>
                    <Icon
                        src={'/static/location-icon.svg'}
                        size={ICON_SIZE.SMALL}
                    />
                </div>
            )}
            {title}
        </button>
    )
}

export default Button
