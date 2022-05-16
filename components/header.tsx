import style from 'styles/header.module.scss'
import Button, { BUTTON_TYPE } from './button'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    return (
        <div className={style.container}>
            <Button type={BUTTON_TYPE.LOCATION} title={'Location'} />
        </div>
    )
}

export default Header
