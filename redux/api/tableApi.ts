import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}

export interface TableType {
    _id: string,
    title: string,
    content: string,
    created_at: string,
}


export const createApi = async (payload : {
    _id: string,
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
        // //alert('진행6 : 응답 성공' + JSON.stringify(createData))
        // localStorage.setItem("createData", createData)

        return response.data
    } catch(err) {
        return err
    }
}

export const deleteApi = async (payload : {
    delid: object,
}) => {
    try{
        const response:AxiosResponse<unknown, TableType[]> = await axios.post( 
            `${SERVER}/table/delete`, 
            payload,
            {headers}
        )
        console.log('서버실행', response.data)
        return response.data
    }catch(err){
        return err;
    }
}

export const updateApi = async (payload : {
    updateid: object,
    title: string,
    content: string,
    created_at: string,
}) => {
    try{
        const response:AxiosResponse<unknown, TableType[]> = await axios.post( 
            `${SERVER}/table/update`, 
            payload,
            {headers}
        )
        return response.data
    }catch(err){
        return err;
    }
}