import Location from 'components/location'

import style from 'styles/header.module.scss'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    return (
        <div className={style.container}>
            <Location />
            <div></div>
        </div>
    )
}

export default Header
