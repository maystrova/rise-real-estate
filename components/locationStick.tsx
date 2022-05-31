import style from 'styles/locationStick.module.scss'

interface LocationStickProps {
    title: string
    img: string
}

const LocationStick = ({ title, img }: LocationStickProps) => {
    return (
        <div className={style.container}>
            <img className={style.icon} src={img} alt='img' />
            <div>{title}</div>
        </div>
    )
}

export default LocationStick
