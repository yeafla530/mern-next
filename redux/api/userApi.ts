import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    "Authorization": "JWT fefege..."
}
export interface UserType {
    userid: string,
    password: string,
    email: string,
    name: string,
    phone: string,
    birth: string,
    address: string
}

// 회원가입 api
export const joinApi = async (payload : {
    userid: string,
    password: string,
    email: string,
    name: string,
    phone: string,
    birth: string,
    address: string
}) => {
    try {
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/user/join`,
            payload,
            {headers}
        )
        console.log(response)
        const loginUser = JSON.stringify(response)
        //alert('진행6 : 응답 성공' + JSON.stringify(loginUser))
        localStorage.setItem("loginUser", loginUser)
        return response.data
    } catch(err) {
        return err
    }
}

export const loginApi = async (payload : {
    userid: string,
    password: string
}) => {
    try {
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/user/login`,
            payload,
            {headers}
        )
        console.log(response)
        const loginUser = JSON.stringify(response.data)
        // console.log(response.data)
        localStorage.setItem("loginUser", loginUser)
        return response.data
    } catch (err) {
        return err;
    }
}