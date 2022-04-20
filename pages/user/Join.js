const Join = () => {
    return (
        <div className={styles.join}>
            <form>
                <input type="text" placeholder="아이디"/>
                <input type="text" placeholder="비밀번호"/>
                <input type="text" placeholder="비밀번호 확인"/>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default Join