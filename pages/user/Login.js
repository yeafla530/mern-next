import styles from '../../styles/User.module.css'

const Login = () => {
    return (
        <div className={styles.user}>
            <form>
                <h1>로그인</h1>
                <input type="text" placeholder="아이디"/>
                <input type="password" placeholder="비밀번호"/>
                <button type="submitstyles ">로그인</button>
            </form>
        </div>
    )
}

export default Login