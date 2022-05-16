import style from 'styles/icon.module.scss'

export enum ICON_SIZE {
    X_SMALL = 'x-small',
    SMALL = 'small',
    MEDIUM = 'medium',
}

interface IconProps {
    src: string
    alt?: string
    size: ICON_SIZE
}

const Icon = ({ src, alt = 'icon', size }: IconProps) => {
    return (
        <img
            className={
                size === ICON_SIZE.SMALL
                    ? style.small
                    : size === ICON_SIZE.MEDIUM
                    ? style.medium
                    : size === ICON_SIZE.X_SMALL
                    ? style.x_small
                    : ICON_SIZE.SMALL
            }
            alt={alt}
            src={src}
        />
    )
}

export default Icon
