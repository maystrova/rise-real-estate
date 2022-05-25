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
            <div>
                <div>{title}</div>
                <div>{rating}</div>
                <div>{location}</div>
                <div>{price}</div>
            </div>
        </div>
    )
}

export default EstateCard
