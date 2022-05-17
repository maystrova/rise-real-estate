import Location from 'components/location'
import Notifications from 'components/notifications'
import User from 'components/user'

import style from 'styles/header.module.scss'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    return (
        <div className={style.container}>
            <Location />
            <div className={style.container_userActions}>
                <Notifications />
                <User />
            </div>
        </div>
    )
}

export default Header
