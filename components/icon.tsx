import style from 'styles/icon.module.scss'

export enum ICON_SIZE {
    XX_SMALL = 'xx-small',
    X_SMALL = 'x-small',
    SMALL = 'small',
    MEDIUM = 'medium',
    BIG = 'big',
    LARGE = 'large',
}

interface IconProps {
    src: string
    alt?: string
    size: ICON_SIZE
}

const iconSizeHandler = (size: ICON_SIZE): string => {
    switch (size) {
        case ICON_SIZE.XX_SMALL:
            return style.xx_small
        case ICON_SIZE.X_SMALL:
            return style.x_small
        case ICON_SIZE.SMALL:
            return style.small
        case ICON_SIZE.MEDIUM:
            return style.medium
        case ICON_SIZE.BIG:
            return style.big
        case ICON_SIZE.LARGE:
            return style.large
    }
    return style.small
}

const Icon = ({ src, alt = 'icon', size }: IconProps) => {
    return <img className={iconSizeHandler(size)} alt={alt} src={src} />
}

export default Icon
