import style from 'styles/icon.module.scss'

export enum ICON_SIZE {
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
                    : ICON_SIZE.SMALL
            }
            alt={alt}
            src={src}
        />
    )
}

export default Icon
