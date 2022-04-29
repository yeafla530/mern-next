// userSaga가 saga > index.ts 모니터링
import {PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from "redux-saga/effects"
import { userActions } from "../reducers/userReducer.ts";
import { joinApi } from "../api/userApi.ts";

// 1. interface - 타입
interface UserJoinType{
    type: String,
    payload: {
        userid: string, password: string, email: string,
        name: string, phone: string, birth: string, address: string
    }
}

interface UserJoinSuccessType{
    type: string,
    payload: {
        userid: string
    }
}

// 
function* join(user: UserJoinType) {
    try{
        //alert('진행3 : saga내부 join')
        const response : UserJoinSuccessType = yield joinApi(user.payload)
        yield put(userActions.joinSuccess(response))
        window.location.href = '/'
    } catch(error) {
        //alert('진행3 : saga 내부 join 실패')
        yield put(userActions.joinFailure(error))
    }
}

export function* watchJoin() {
    yield takeLatest(userActions.joinRequest, join)
}