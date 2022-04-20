import styles from '../../styles/User.module.css'
import {useState} from 'react'
export default function Login(){
    const [login, setLogin] = useState({
        userid: '', password: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setLogin({...login, [name]:value})
    }

    return (
        <form className={styles.user} onSubmit={e => {
            e.preventDefault()
            setLogin({
                userid: '', password: ''
            })
        }}>
            <h1>로그인</h1>
            <input type="text" placeholder="아이디" onChange={handleChange}/>
            <input type="password" placeholder="비밀번호" onChange={handleChange}/>
            <button type="submit">로그인</button>
        </form>
    )
}
