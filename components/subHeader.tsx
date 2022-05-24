import style from 'styles/subHeader.module.scss'

interface SubHeaderProps {
    title: string
    subTitle: string
}

const SubHeader = ({ title, subTitle }: SubHeaderProps) => {
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <div className={style.subtitle}>{subTitle}</div>
        </div>
    )
}

export default SubHeader
