import Head from 'next/head'
import DataTable from './common/DataTable.js'
import styles from '../styles/Board.module.css'

export default function Board() {
  return (
    <div className={styles.container}>
        <Head>
            <title>딥브레인 AI 과제</title>
        </Head>

        <header className={styles.header}>
            <h1 className={styles.h1}>한국사회보장정보원_복지서비스정보 게시판</h1>
        </header>
        <main className={styles.main}>
            <DataTable/>   
        </main>

        <footer className={styles.footer}>
            <p>| Email | yeafla530@naver.com</p>
        </footer>
    </div>
  )
}
