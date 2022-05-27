import Icon, { ICON_SIZE } from 'components/icon'

import style from 'styles/estateCard.module.scss'

export enum ESTATE_TYPE {
    HOUSE = 'House',
    APARTMENT = 'Apartment',
    VILLA = 'Villa',
}

interface EstateCardProps {
    img: string
    title: string
    rating: number
    location: string
    price: number
    type: ESTATE_TYPE
}

const EstateCard = ({
    title,
    img,
    price,
    rating,
    type,
    location,
}: EstateCardProps) => {
    return (
        <div className={style.container}>
            <div>
                <img className={style.picture} src={img} alt='img' />
            </div>
            <div className={style.main}>
                <div className={style.main__header}>
                    <div className={style.title}>{title}</div>
                    <div className={style.rating}>
                        <Icon
                            src={'/static/star-icon.svg'}
                            size={ICON_SIZE.XX_SMALL}
                        />
                        <div className={style.rating__title}>{rating}</div>
                    </div>
                    <div className={style.rating}>
                        <Icon
                            src={'/static/location-icon.svg'}
                            size={ICON_SIZE.XX_SMALL}
                        />
                        <div className={style.rating__title}>{location}</div>
                    </div>
                </div>
                <div className={style.price}>$ {price}/month</div>
            </div>
        </div>
    )
}

export default EstateCard
