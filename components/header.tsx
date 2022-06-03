import Location from 'components/location'
import Notifications from 'components/notifications'
import { USER_ICON_SIZE } from 'components/profile'

import style from 'styles/header.module.scss'
import Profile from 'components/profile'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    return (
        <div className={style.container}>
            <Location />
            <div className={style.container_userActions}>
                <Notifications />
                <Profile size={USER_ICON_SIZE.SMALL} />
            </div>
        </div>
    )
}

export default Header
