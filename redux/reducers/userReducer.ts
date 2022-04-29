import {createSlice} from '@reduxjs/toolkit'

// type check
// interface : 타입 정의
export interface UserType{
    userid: String,
    password: String,
    email: String,
    name: String,
    phone: String,
    birth: String,
    address: String,
}

export interface UserState{
    loading: boolean,
    data: UserType[],
    error: any,
}

// 초기값
const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

// createSlice, 초기 상태 
// 리듀서 함수의 객체 
// 슬라이스 이름을 받아 리듀서 및 상태에 해당하는 액션 생성자와 액션 유형을 자동으로 생성하는 함수
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // 액션 생성함수
        joinRequest(state: UserState, _payload) {
            //alert('진행2: 리듀서 내부')
            state.loading = true
        },

        joinSuccess(state: UserState, {payload}) {
            state.data = [...state.data, payload]
            state.loading = false
        },
        joinFailure(state: UserState, {payload}) {
            state.data = payload
            state.loading = false
        }
    }

})

// joinRequest joinSuccess joinFailure가 actions로 넘어감
const {reducer, actions} = userSlice
export const userActions = actions
export default reducer