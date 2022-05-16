import Button, { BUTTON_TYPE } from 'components/button'
import style from 'styles/header.module.scss'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    return (
        <div className={style.container}>
            <Button type={BUTTON_TYPE.LOCATION} title={'Location'} />
            <div>
                <Button type={BUTTON_TYPE.NOTIFICATION} />
            </div>
        </div>
    )
}

export default Header
