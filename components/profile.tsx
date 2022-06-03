import Button, { BUTTON_TYPE } from 'components/button'
import Icon, { ICON_SIZE } from 'components/icon'

export enum USER_ICON_SIZE {
    BIG = 'big',
    SMALL = 'small',
}

interface ProfileProps {
    name?: string
    size: USER_ICON_SIZE
}

const Profile = ({ name, size }: ProfileProps) => {
    return (
        <Button type={BUTTON_TYPE.USER} onClick={() => {}}>
            <div
                style={{
                    width: size === USER_ICON_SIZE.SMALL ? '44px' : '70px',
                }}
            >
                <Icon
                    src={'/static/user.jpeg'}
                    size={
                        size === USER_ICON_SIZE.SMALL
                            ? ICON_SIZE.BIG
                            : ICON_SIZE.LARGE
                    }
                />
                {name && <div>{name}</div>}
            </div>
        </Button>
    )
}

export default Profile
