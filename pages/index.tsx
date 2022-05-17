import Page from 'components/page'
import Header from 'components/header'

import style from 'styles/homePage.module.scss'

const title: string = `Let's start exploring`

const HomePage = () => {
    return (
        <Page>
            <Header />
            <div className={style.main}>
                <h1 className={style.main_title}>
                    Hey, User! <br /> {title}
                </h1>
            </div>
        </Page>
    )
}

export default HomePage
