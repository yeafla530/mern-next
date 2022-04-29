import styles from '../../styles/Table.module.css'
import React, {useState, useEffect} from 'react'
import {tableActions} from '../../redux/reducers/tableReducer.ts';
import { useDispatch } from "react-redux";
import axios from 'axios'
// import style component
// 맨 앞글자 대문자여야함
// function DataTableList(props) {
//     return (
//         Object.entries(props.obj).map(([key,value]) => (
//             <td key={key}>{value}</td>
//         ))
        
//     )
// }

export default function DataTable() {
    const [data, setData] = useState({
        title:'', content:'', created_at: new Date().toDateString()
    });

    const [dataList, setDataList] = useState([])
    const [delList, setDelList] = useState({})
    const [modList, setModList] = useState({
        id: '', title:'', content:'', created_at: new Date().toDateString()
    })
    const [isMod, setIsMod] = useState(false)
    const dispatch = useDispatch()
    
    useEffect(() =>{
        axios.get('http://localhost:5000/table/getTables')
        .then(res => {
            setDataList(res.data)
        })
        .catch(err => console.log(err))


    }, [data])

    const handleChange = (e) => { 
        e.preventDefault()
        const {name, value} = e.target
        setData({...data, [name]:value})
        console.log("tabledata", data)
    }

    const deleteList = (table) => {
        console.log(table)
        setDelList(table)
        //alert('1번 payload변경')
        dispatch(tableActions.deleteRequest(table))
        
        axios.get('http://localhost:5000/table/getTables')
        .then(res => {
            console.log(res.data)
            setDataList(res.data)
        })
        .catch(err => console.log(err))
    }

    const clickModify = async (payload) => {
        console.log('pay', payload)
        await setModList(payload)
        setIsMod(true)

    }
    const handleChangeModify = (payload) => {
        e.preventDefault()
        const {name, value} = e.target
        setData({...data, [name]:value})
        // console.log(payload)
        // setModList(payload)
    } 
    const tableHeader = [
        "index",
        "title",
        "content",
        "created_at",
        "관리"
    ]
    // const tableHeader = [
    //     "서비스아이디",
    //     "서비스명",
    //     "서비스URL",
    //     "서비스요약",
    //     "대표문의",
    //     "소관부처명",
    //     "최종수정일"
    // ]
    // const dummyData = []
    // const dummyData = [
    //     {id: 1, service: "교육복지 우선지원 사업", url: "http://www.bokjiro.go.kr/welInfo/retrieveGvmtWelInfo.do?welInfSno=20", contents: "취약계층 학생이 밀집한 학교를 선정하여 집중 지원함으로써 교육·문화·복지 수준을 높이고 교육격차를 해소합니다.", contact: "	다누리 콜센터 1577-1366", location: "보건복지부", updateData: "2020-03-25"}
    // ]
    return (
        <>
        <table className={styles.table}>
            {/* <caption>복지서비스 정보</caption> */}
            <caption>게시판</caption>
            {/* table header */}
            <thead>
                <tr>
                    {tableHeader.map((val, idx) => <td key={idx}>{val}</td>)}
                </tr>
            </thead>
            {/* table body */}
            <tbody>
                {dataList.length > 0 ? 
                    dataList.map((table, idx) => (
                        <tr key={idx}>
                           <td>{idx}</td>
                           <td>{table.title}</td>
                           <td>{table.content}</td>
                           <td>{table.created_at}</td>
                           <td>
                               <button onClick={() => (
                                   deleteList({delid:table._id})
                               )}>삭제</button>
                               <button onClick={() => clickModify({updateid: table._id, title: table.title, content: table.content, created_at: table.created_at})}>수정</button>
                           </td>

                        </tr> 
                    ))
                    :
                    <tr>
                        <td colSpan="3">데이터가 존재하지 않습니다</td>
                    </tr>
                }
            </tbody>
        </table>
        {!isMod ? 
                <form className={styles.user} onSubmit={e => {
                    e.preventDefault()
                    // //alert(`진행1: 작성 클릭 ${data}`)
                    dispatch(tableActions.createRequest(data))
                    setDataList([...dataList, data])
                    setData({
                        title:'', content:'', created_at: new Date().toDateString()
                    })
                }}>

                    <h1>List 추가</h1>
                    <div>
                        <input type="text" name="title" placeholder="타이틀" onChange={handleChange}/>
                    </div>
                    <div>
                        <textarea name="content" placeholder="내용" onChange={handleChange}/>
                    </div>
                    <div>
                        <button type="submit">작성완료</button>
                    </div>
                </form>
            : 
            // 수정하기
            <form className={styles.user} onSubmit={e => {
                e.preventDefault()
                // //alert(`진행1: 작성 클릭 ${data}`)
                dispatch(tableActions.modifyRequest(data))
                setDataList([...dataList, data])
                setModList({
                    id: '', title:'', content:'', created_at: new Date().toDateString()
                })
            }}>

                <h1>List 수정</h1>
                <div>
                    <input type="text" name="title" placeholder="타이틀" value={modList.title} onChange={handleChangeModify}/>
                </div>
                <div>
                    <textarea name="content" placeholder="내용" value={modList.content} onChange={handleChangeModify}/>
                </div>
                <div>
                    <button type="submit">수정완료</button>
                    <button onClick={() => setIsMod(false)}>수정취소</button>
                </div>
            </form>

        }
        </>
    )
}
