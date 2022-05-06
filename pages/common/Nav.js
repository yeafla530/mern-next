import styles from "./styles/common.module.css"
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Nav(){
    const [isLogin, setIsLogin] =  useState(false)

    useEffect(() => {
        if (localStorage.getItem("loginUser")) {
            console.log('true임')
            setIsLogin(true)
        } else {
            console.log('false임')
            setIsLogin(false)
        }
    })

    return (
        <nav className={styles.nav}>
            <div className={styles.title}>
                <h3>TodoList</h3>
            </div>
            {!isLogin ? <div className={styles.buttons}>
                {/* Next.js의 router이름은 폴더 구조와 동일 */}
                <div>
                    <Link href="/user/login">로그인</Link>
                </div>
                <div>
                    <Link href="/user/join">회원가입</Link>
                </div>
                <div>
                    {/* <Link href="/table/createTable">게시글작성</Link> */}
                </div>
            </div>: <></>}
            
        </nav>
    )
}