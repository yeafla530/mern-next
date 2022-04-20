import Head from 'next/head'
import {useState} from 'react'
import DataTable from './table/dataTable.js'
import Login from './user/login.js'
import Join from './user/join.js'
import styles from '../styles/Table.module.css'

export default function Home() {
    const [status, setStatus] = useState("login")
    
    return (
        // 홈
        <div className={styles.container}>
            <Head>
                <title>딥브레인 AI 과제</title>
            </Head>
            <main>
                <h1>딥브레인 3기 과제 홈페이지</h1>
            </main>
        </div>
    )
}
