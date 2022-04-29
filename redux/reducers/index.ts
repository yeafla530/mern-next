// 함수의 저장공간이 필요
// * : 제너레이터 함수
// ssr설정
import { combineReducers } from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import users from './userReducer.ts'
import tables from './tableReducer.ts'

const rootReducer = (state: any, action: any) => {
    // HYDRATE : HTML코드와 React인 JS코드를 매칭시키는 과정
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        }
    }
    // 순수함수
    // 리듀서를 하나로 모아줌
    return combineReducers({
        users, tables
    })(state, action) // 즉시실행

}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>