// import React, {useState} from 'react'
// import { useDispatch } from "react-redux";
// import {userActions} from '../../redux/reducers/userReducer.ts'
// import styles from '../../styles/User.module.css';


// export default function createTable() {
//     const [data, setData] = useState({
//         title:'', content:'', created_at: Date.now().toLocaleString()
//     });
//     const handleChange = (e) => { 
//         e.preventDefault()
//         const {name, value} = e.target
//         setData({...data, [name]:value})
//     }
//     return (
//         <form className={styles.user} onSubmit={e => {
//             e.preventDefault()
//             // dispatch(userActions.joinRequest(user))
//             // setData({
//             //     title:'', content:'', created_at: Date.now()
//             // })
//         }}>
//             <h1>게시글 작성</h1>
//             <input type="text" name="title" placeholder="타이틀" onChange={handleChange}/>
//             <textarea name="content" placeholder="내용" onChange={handleChange}/>
//             <div>
//                 <button type="submit">작성완료</button>
//             </div>
//         </form>
//     )
// }