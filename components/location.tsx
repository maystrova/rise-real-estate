import Button, { BUTTON_TYPE } from 'components/button'
import Icon, { ICON_SIZE } from 'components/icon'

import style from 'styles/location.module.scss'

interface LocationProps {}

const Location = ({}: LocationProps) => {
    return (
        <Button type={BUTTON_TYPE.LOCATION} onClick={() => {}}>
            <div className={style.main}>
                <Icon
                    src={'/static/location-icon.svg'}
                    size={ICON_SIZE.SMALL}
                />
                <div className={style.title}>{'Location'}</div>
                <Icon src={'/static/down-icon.svg'} size={ICON_SIZE.X_SMALL} />
            </div>
        </Button>
    )
}

export default Location
