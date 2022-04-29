import {createSlice} from '@reduxjs/toolkit'

// type check
// interface : 타입 정의
export interface TableType {
    _id: string,
    title: string,
    content: string,
    created_at: string,
}

export interface TableState{
    loading: boolean,
    data: TableType[],
    error: any,
}

// 초기값
const initialState: TableState = {
    loading: false,
    data: [],
    error: null
}

// createSlice, 초기 상태 
// 리듀서 함수의 객체 
// 슬라이스 이름을 받아 리듀서 및 상태에 해당하는 액션 생성자와 액션 유형을 자동으로 생성하는 함수
const tableSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        // 액션 생성함수
        createRequest(state: TableState, _payload) {
            // //alert('진행2: 리듀서 내부')
            state.loading = true
        },

        createSuccess(state: TableState, {payload}) {
            state.data = [...state.data, payload]
            state.loading = false
        },
        createFailure(state: TableState, {payload}) {
            state.data = payload
            state.loading = false
        },

        deleteRequest(state: TableState, _payload) {
            //alert('진행2: 리듀서 내부')
            state.loading = true
        },
        deleteSuccess(state: TableState, {payload}) {
            //alert('진행4: 리듀서 내부')
            state.data = [...state.data, payload]
            state.loading = false
        },
        deleteFailure(state: TableState, {payload}) {
            state.data = payload
            state.loading = false
        },

        modifyRequest(state: TableState, _payload) {
            //alert('진행2: 리듀서 내부')
            state.loading = true
        },
        modifySuccess(state: TableState, {payload}) {
            //alert('진행4: 리듀서 내부')
            state.data = [...state.data, payload]
            state.loading = false
        },
        modifyFailure(state: TableState, {payload}) {
            state.data = payload
            state.loading = false
        },


    }

})

// createRequest createSuccess createFailure가 actions로 넘어감
const {reducer, actions} = tableSlice
export const tableActions = actions
export default reducer