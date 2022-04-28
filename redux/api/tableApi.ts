import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}

export interface TableType {
    title: string,
    content: string,
    created_at: string,
}


export const createApi = async (payload : {
    title: string,
    content: string,
    created_at: string,
}) => {
    try {
        console.log('진행4 : api실행')
        const response: AxiosResponse<unknown, TableType[]> = await axios.post(
            `${SERVER}/table/create`,
            payload,
            {headers}
        )
        const createData = JSON.stringify(response.data)
        alert('진행6 : 응답 성공' + JSON.stringify(createData))
        // localStorage.setItem("createData", createData)

        return response.data
    } catch(err) {
        return err
    }
}