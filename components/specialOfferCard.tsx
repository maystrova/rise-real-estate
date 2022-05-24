import Image from 'next/image'

import Icon, { ICON_SIZE } from 'components/icon'

import style from 'styles/specialOfferCard.module.scss'

interface SpecialOfferCardProps {
    title: string
    description: string
    background: string
}

const SpecialOfferCard = ({
    title,
    description,
    background,
}: SpecialOfferCardProps) => {
    return (
        <div
            style={{
                background: background,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            className={style.container}
        >
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
            <div className={style.forward}>
                <Icon
                    src={'/static/whiteArrow-icon.svg'}
                    size={ICON_SIZE.SMALL}
                />
            </div>
        </div>
    )
}

export default SpecialOfferCard
