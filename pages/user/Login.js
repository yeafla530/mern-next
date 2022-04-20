const Login = () => {
    return (
        <div className={styles.login}>
            <form>
                <input type="text" placeholder="아이디"/>
                <input type="text" placeholder="비밀번호"/>
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}

export default Login