import Button, { BUTTON_TYPE } from 'components/button'
import Icon, { ICON_SIZE } from 'components/icon'

interface UserProps {}

const User = ({}: UserProps) => {
    return (
        <Button type={BUTTON_TYPE.USER} onClick={() => {}}>
            <Icon src={'/static/user.jpeg'} size={ICON_SIZE.BIG} />
        </Button>
    )
}

export default User
