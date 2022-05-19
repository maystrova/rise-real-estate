import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Page from 'components/page'
import Header from 'components/header'
import Search from 'components/search'

import style from 'styles/homePage.module.scss'
import CategoryButton from 'components/categoryButton'

const title: string = `Let's start exploring`

interface categoryButtons {
    title: string
    id: number
    isChecked: boolean
}

const HomePage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const CATEGORY_BUTTONS: categoryButtons[] = [
        { title: 'All', id: 1, isChecked: !isChecked },
        { title: 'House', id: 2, isChecked: !isChecked },
        { title: 'Apartment', id: 3, isChecked: !isChecked },
        { title: 'Villa', id: 4, isChecked: !isChecked },
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
                            <CategoryButton
                                key={btn.id}
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
                        )
                    })}
                </div>
            </div>
        </Page>
    )
}

export default HomePage
