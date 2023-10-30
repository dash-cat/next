import Head from 'next/head'
import A from '../components/A.js'

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'nextJs' + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div>
                <div className='navbar'>
                    <A href={'/'} text="Главная"/>
                    <A href={'/users'} text="Пользователи"/>
                </div>
                <div>
                    {children}
                </div>
                <style jsx>
                    {`
                    .navbar {
                    background: orange;
                    padding: 15px;
                    }
                    `}
                </style>
            </div>
        </>
    )
}

export default MainContainer

