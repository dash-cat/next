import { useRouter } from 'next/router'
import styles from '../../styles/user.module.scss'

export default function User({user}) {
    const { query } = useRouter()
    return (
        <div className={styles.user}>
            <h1>
                Пользователь c id {query.id}
            </h1>
            <div>Имя пользователя: {user.name} </div>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}