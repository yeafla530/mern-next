import styles from '../../styles/User.module.css';

const Join = () => {
    return (
        <div className={styles.user}>
            <form>
                <h1>회원가입</h1>
                <input type="text" placeholder="아이디"/>
                <input type="text" placeholder="비밀번호"/>
                <input type="text" placeholder="비밀번호 확인"/>
                <div>
                    <button type="submit">회원가입</button>
                </div>
            </form>
        </div>
    )
}

export default Join