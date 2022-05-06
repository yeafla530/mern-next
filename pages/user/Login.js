import styles from '../../styles/User.module.css'
import {useState} from 'react'
import { useDispatch } from "react-redux";
import {userActions} from '../../redux/reducers/userReducer.ts'

export default function Login(){
    const [login, setLogin] = useState({
        userid: '', password: ''
    })
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setLogin({...login, [name]:value})
    }

    return (
        <form className={styles.user} onSubmit={e => {
            e.preventDefault()
            dispatch(userActions.loginRequest(login))
            setLogin({
                userid: '', password: ''
            })
        }}>
            <h1>로그인</h1>
            <input type="text" placeholder="아이디" name="userid" onChange={handleChange}/>
            <input type="password" placeholder="비밀번호" name="password" onChange={handleChange}/>
            <button type="submit">로그인</button>
        </form>
    )
}
