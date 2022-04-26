import Head from 'next/head'
import {useState, useEffect} from 'react'
import DataTable from './table/dataTable.js'
import Login from './user/login.js'
import Join from './user/join.js'
import styles from '../styles/Table.module.css'
import axios from 'axios'

export default function Home() {
    const [status, setStatus] = useState("login")
    // 서버 연결 확인
    useEffect(() => {
        axios.get("http://localhost:5000/api/now")
        .then(res => {
            let data = res.data
            document.getElementById('timezone').innerHtml = 
            `<p>현재시간 ${data}</p>`
        })
    }, []);
    return (
        // 홈
        <div className={styles.container}>
            <Head>
                <title>딥브레인 AI 과제</title>
            </Head>
            <main>
                <h1>딥브레인 3기 과제 홈페이지</h1>
                <p id="timezone">현재시간</p>
            </main>
        </div>
    )
}
