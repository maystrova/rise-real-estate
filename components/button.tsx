import style from 'styles/button.module.scss'
import Icon, { ICON_SIZE } from 'components/icon'

export enum BUTTON_TYPE {
    LOCATION = 'location',
    NOTIFICATION = 'notifications',
    DEFAULT = 'default',
}

interface ButtonProps {
    type: BUTTON_TYPE
    title?: string
}

const buttonTypeHandler = (type: BUTTON_TYPE): string => {
    switch (type) {
        case BUTTON_TYPE.LOCATION:
            return style.location
        case BUTTON_TYPE.NOTIFICATION:
            return style.notifications
    }
    return BUTTON_TYPE.DEFAULT
}

const Button = ({ type, title }: ButtonProps) => {
    return (
        <button className={buttonTypeHandler(type)}>
            {BUTTON_TYPE.LOCATION ? (
                <div className={style.location_container}>
                    <Icon
                        src={'/static/location-icon.svg'}
                        size={ICON_SIZE.SMALL}
                    />
                    <div className={style.location_title}>{title}</div>
                    <Icon
                        src={'/static/down-icon.svg'}
                        size={ICON_SIZE.X_SMALL}
                    />
                </div>
            ) : BUTTON_TYPE.NOTIFICATION ? (
                <div className={style.notifications}>
                    <Icon
                        src={'/static/notification-icon.svg'}
                        size={ICON_SIZE.MEDIUM}
                    />
                </div>
            ) : (
                <div></div>
            )}
        </button>
    )
}

export default Button
