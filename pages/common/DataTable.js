import styles from '../../styles/Home.module.css'


const DataTable = () => {
    return (
        <table className={styles.table}>
            <th className={styles.th}>서비스아이디</th>
            <th className={styles.th}>서비스명</th>
            <th className={styles.th}>서비스URL</th>
            <th className={styles.th}>서비스요약</th>
            <th className={styles.th}>대표문의</th>
            <th className={styles.th}>소관부처명</th>
            <th className={styles.th}>최종수정일</th>
            {/* 첫번째 줄 */}
            <tr className={styles.tr}>
                <td className={styles.td}>이름1</td>
                <td className={styles.td}>1</td>
                <td className={styles.td}>2</td>
                <td className={styles.td}>3</td>
                <td className={styles.td}>3</td>
                <td className={styles.td}>3</td>
                <td className={styles.td}>3</td>
                
            </tr>
            {/* 두번째 줄 */}
            <tr className={styles.tr}>
                <td className={styles.td}>이름2</td>
                <td className={styles.td}>1</td>
                <td className={styles.td}>2</td>
                <td className={styles.td}>3</td>
                <td className={styles.td}>3</td>
                <td className={styles.td}>3</td>
                <td className={styles.td}>3</td>
            </tr>
        </table>
    )
}

export default DataTable