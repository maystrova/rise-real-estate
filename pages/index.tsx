import { useState } from 'react'

import { CategoryButtonType, EstateType, SpecialOfferType } from 'services/type'

import Page from 'components/page'
import Header from 'components/header'
import CategoryButton from 'components/categoryButton'
import Search from 'components/search'
import ActiveLink from 'components/activeLink'
import SubHeader from 'components/subHeader'
import EstateCard, { ESTATE_TYPE } from 'components/estateCard'
import SpecialOfferCard from 'components/specialOfferCard'

import style from 'styles/homePage.module.scss'

const title: string = `Let's start exploring`

const HomePage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const CATEGORY_BUTTONS: CategoryButtonType[] = [
        { title: 'All', id: 1 },
        { title: 'House', id: 2 },
        { title: 'Apartment', id: 3 },
        { title: 'Villa', id: 4 },
    ]

    const SPECIAL_OFFERS: SpecialOfferType[] = [
        {
            title: 'Halloween Sale!',
            description: 'All discount up to 60%',
            img: '/static/halloween.png',
            id: 1,
        },
        {
            title: 'Summer Vacation',
            id: 2,
            img: '/static/bali-beachview.png',
            description: 'All discount up to 60%',
        },
    ]

    const ESTATES: EstateType[] = [
        {
            title: 'Sky Dandelions Apartment',
            id: 1,
            img: '/static/sky-dandelions-ap.png',
            price: 290,
            type: ESTATE_TYPE.APARTMENT,
            rating: 4.9,
            location: 'Jakarta, Indonesia',
        },
        {
            title: 'The laurels Villa',
            id: 2,
            img: '/static/laurels-villa.png',
            type: ESTATE_TYPE.VILLA,
            price: 300,
            location: 'Bali, Indonesia',
            rating: 4.9,
        },
    ]

    return (
        <Page>
            <Header />
            <div className={style.main}>
                <h1 className={style.main_title}>
                    Hey, User! <br /> {title}
                </h1>
                <Search />
                <div className={style.categories}>
                    {CATEGORY_BUTTONS.map(btn => {
                        return (
                            <ActiveLink key={btn.id} href={'/'}>
                                <CategoryButton
                                    title={btn.title}
                                    backgroundColor={
                                        isChecked
                                            ? 'rgba(37, 43, 92, 1)'
                                            : '#f5f4f8'
                                    }
                                    fontColor={
                                        isChecked
                                            ? '#f5f4f8'
                                            : 'rgba(37, 43, 92, 1)'
                                    }
                                    onClick={() => setIsChecked(!isChecked)}
                                />
                            </ActiveLink>
                        )
                    })}
                </div>
                <div className={style.specialOffers}>
                    {SPECIAL_OFFERS.map(offer => {
                        return (
                            <SpecialOfferCard
                                key={offer.id}
                                title={offer.title}
                                description={offer.description}
                                background={`url(${offer.img})`}
                            />
                        )
                    })}
                </div>
                <div className={style.featuredEstates}>
                    <SubHeader
                        title={'Features Estates'}
                        subTitle={'view all'}
                    />
                    <div>
                        {ESTATES.map(estate => {
                            return (
                                <EstateCard
                                    key={estate.id}
                                    img={estate.img}
                                    title={estate.title}
                                    rating={estate.rating}
                                    location={estate.location}
                                    price={estate.price}
                                    type={estate.type}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default HomePage
