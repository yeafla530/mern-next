import styles from '../../styles/Table.module.css'

const DataTable = () => {
    const tableHeader = [
        "서비스아이디",
        "서비스명",
        "서비스URL",
        "서비스요약",
        "대표문의",
        "소관부처명",
        "최종수정일"
    ]
    // const dummyData = []
    const dummyData = [
        {id: 1, service: "교육복지 우선지원 사업", url: "http://www.bokjiro.go.kr/welInfo/retrieveGvmtWelInfo.do?welInfSno=20", contents: "취약계층 학생이 밀집한 학교를 선정하여 집중 지원함으로써 교육·문화·복지 수준을 높이고 교육격차를 해소합니다.", contact: "	다누리 콜센터 1577-1366", location: "보건복지부", updateData: "2020-03-25"}
    ]
    return (
        <table className={styles.table}>
            <caption>복지서비스 정보</caption>
            {/* table header */}
            <thead>
                <tr>
                    {tableHeader.map((val, idx) => <td key={idx}>{val}</td>)}
                </tr>
            </thead>
            {/* table body */}
            <tbody>
                {dummyData.length > 0 ? 
                    dummyData.map((obj, idx) => (
                        <tr key={idx}>
                            {
                                Object.entries(obj).map(([key,value]) => (
                                    <td key={key}>{value}</td>
                                ))
                            }
                        </tr>
                    ))
                    
                    :
                    <tr>
                        <td colSpan="7">데이터가 존재하지 않습니다</td>
                    </tr>
                
                
                }
               
            </tbody>
            <tbody>
                
            </tbody>
        </table>
    )
}

export default DataTable