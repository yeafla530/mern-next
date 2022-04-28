import React, {useState, useEffect} from 'react'
import tableStyles from "../../styles/Tabel.module.css"

export default function Profile() {
    const [profile, setProfile] = useState({})
    useEffect(() => {
        const loginUser = localStorage.getItem('loginUser')
        const user = JSON.parse(loginUser)
        setProfile(user)
    }, [])
}