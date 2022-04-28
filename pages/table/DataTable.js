import styles from '../../styles/Table.module.css'
import React, {useState} from 'react'
import {tableActions} from '../../redux/reducers/tableReducer.ts';
import { useDispatch } from "react-redux";

// import style component
// 맨 앞글자 대문자여야함
function DataTableList(props) {
    return (
        Object.entries(props.obj).map(([key,value]) => (
            <td key={key}>{value}</td>
        ))
        
    )
}

export default function DataTable() {
    const [data, setData] = useState({
        title:'', content:'', created_at: Date.now().toLocaleString()
    });

    const dispatch = useDispatch()

    const handleChange = (e) => { 
        e.preventDefault()
        const {name, value} = e.target
        setData({...data, [name]:value})
        console.log("tabledata", data)
    }
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
        <>
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
                            <DataTableList obj={obj}/>
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
        <div></div>
        <form className={styles.user} onSubmit={e => {
            e.preventDefault()
            alert(`진행1: 작성 클릭 ${data}`)
            dispatch(tableActions.createRequest(data))
            setData({
                title:'', content:'', created_at: Date.now()
            })
        }}>
            <h1>게시글 작성</h1>
            {data.title}
            <input type="text" name="title" placeholder="타이틀" onChange={handleChange}/>
            <textarea name="content" placeholder="내용" onChange={handleChange}/>
            <div>
                <button type="submit">작성완료</button>
            </div>
        </form>
        </>
    )
}
