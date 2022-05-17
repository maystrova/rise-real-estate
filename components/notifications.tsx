import Button, { BUTTON_TYPE } from 'components/button'
import Icon, { ICON_SIZE } from 'components/icon'

interface NotificationsProps {}

const Notifications = ({}: NotificationsProps) => {
    return (
        <Button type={BUTTON_TYPE.NOTIFICATION} onClick={() => {}}>
            <Icon
                src={'/static/notification-icon.svg'}
                size={ICON_SIZE.MEDIUM}
            />
        </Button>
    )
}

export default Notifications
