import Icon, { ICON_SIZE } from 'components/icon'

import style from 'styles/search.module.scss'

interface SearchProps {}

const placeholder: string = 'Search House, Apartment, etc'

const Search = ({}: SearchProps) => {
    return (
        <div className={style.container}>
            <Icon src={'/static/search-icon.svg'} size={ICON_SIZE.MEDIUM} />
            <input
                className={style.search}
                placeholder={placeholder}
                type='text'
            />
            <img src={'/static/line-icon.svg'} alt='icon' />
            <Icon src={'static/mic-icon.svg'} size={ICON_SIZE.MEDIUM} />
        </div>
    )
}

export default Search
