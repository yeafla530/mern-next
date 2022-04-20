import Head from 'next/head'
import {useState} from 'react'
import DataTable from './common/DataTable.js'
import Login from './user/Login.js'
import Join from './user/Join.js'
import styles from '../styles/Board.module.css'

export default function Board() {
    const [status, setStatus] = useState("login")
    
    return (
        <div className={styles.container}>
            <Head>
                <title>딥브레인 AI 과제</title>
            </Head>

            <header className={styles.header}>
                <div className={styles.title}>
                    <h3>한국사회보장정보원_복지서비스정보 게시판</h3>
                </div>
                <div className={styles.buttons}>
                    <div onClick={() => setStatus("login")}>
                        <p>로그인</p>
                    </div>
                    <div onClick={() => setStatus("join")}>
                        <p>회원가입</p>
                    </div>
                    <div onClick={() => setStatus("dataTable")}>
                        <p>데이터</p>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                {status === "login" ? <Login/> : status === "join" ? <Join/> : <DataTable/>}   
            </main>

            <footer className={styles.footer}>
                <p>| Email | yeafla530@naver.com</p>
            </footer>
        </div>
    )
}
