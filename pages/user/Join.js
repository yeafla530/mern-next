import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import {userActions} from '../../redux/reducers/userReducer.ts'
import styles from '../../styles/User.module.css';



export default function Join() {
    // 회원가입 정보
    const [user, setUser] = useState({
        userid: '', password: '', repassword: '', email: '', name: '', phone: '', birth: '', address: ''
    })

    // Dispatch
    const dispatch = useDispatch()

    // 변경되는 값
    const handleChange = e => {
        e.preventDefault()
        // input의 name과 value를 구조분해 할당
        const {name, value} = e.target
        setUser({...user, [name]:value})
        console.log("user", user)

    }

    return (
        <form className={styles.user} onSubmit={e => {
            e.preventDefault()
            // //alert(`진행1: 회원가입 클릭 ${user}`)
            // userReducer에서 행해지는 actions
            // 변화감지
            dispatch(userActions.joinRequest(user))
            setUser({
                userid:'', password: '', repassword: '',  email: '', name: '', phone: '', birth: '', address: ''
            })

        }}>
            <h1>회원가입</h1>
            <input type="text" name="userid" placeholder="아이디" onChange={handleChange}/>
            <input type="password" name="password" placeholder="비밀번호" onChange={handleChange}/>
            <input type="password" name="repassword" placeholder="비밀번호 확인" onChange={handleChange}/>
            <input type="text" name="email" placeholder="이메일" onChange={handleChange}/>
            <input type="text" name="name" placeholder="이름" onChange={handleChange}/>
            <input type="text" name="phone" placeholder="전화번호" onChange={handleChange}/>
            <input type="text" name="birth" placeholder="생년월일" onChange={handleChange}/>
            <input type="text" name="address" placeholder="주소" onChange={handleChange}/>
            <div>
                <button type="submit">회원가입</button>
            </div>
        </form>
    )
}
