import A from '../components/A.js'
import Head from 'next/head'

const Index = () => {
    return (
        <>
          <Head>
            <meta keywords='nextJs'></meta>
            <title>Главная страница</title>
          </Head>
            <div>
                <div className='navbar'>
                    <A href={'/'} text="Главная"/>
                    <A href={'/users'} text="Пользователи"/>
                </div>
                <h1>Main Page</h1>
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

export default Index;