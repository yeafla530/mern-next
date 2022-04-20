import styles from "./styles/common.module.css"
import Link from "next/link";

export default function Nav(){
    return (
        <nav className={styles.nav}>
            <div className={styles.title}>
                <h3>한국사회보장정보원_복지서비스정보 게시판</h3>
            </div>
            <div className={styles.buttons}>
                {/* Next.js의 router이름은 폴더 구조와 동일 */}
                <div>
                    <Link href="/user/login">로그인</Link>
                </div>
                <div>
                    <Link href="/user/join">회원가입</Link>
                </div>
                <div>
                    <Link href="/table">데이터목록</Link>
                </div>
            </div>
        </nav>
    )
}