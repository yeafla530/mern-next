// userSaga가 saga > index.ts 모니터링
import {PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from "redux-saga/effects"
import { userActions } from "../reducers/userReducer.ts";
import { joinApi } from "../api/userApi.ts";
import { loginApi } from "../api/userApi.ts";

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
interface UserLoginType{
    type: string;
    payload: {
        userid:string, password:string
    }
}
interface UserLoginSuccessType{
    type: string;
    payload: {
        userid:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}

interface UserLoginFailType{
    type: string;
    payload: {
        userid:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
// 
function* join(user: UserJoinType) {
    try{
        //alert('진행3 : saga내부 join')
        const response : UserJoinSuccessType = yield joinApi(user.payload)
        yield put(userActions.joinSuccess(response))
        localStorage.setItem("signup", JSON.stringify(user.payload))
        window.location.href='/user/login'
    } catch(error) {
        //alert('진행3 : saga 내부 join 실패')
        yield put(userActions.joinFailure(error))
    }
}

export function* watchJoin() {
    yield takeLatest(userActions.joinRequest, join)
}


// 로그인
function* login(login: UserLoginType){
    try{
        const response : UserLoginSuccessType = yield loginApi(login.payload)
        // response 확인
        yield put(userActions.loginSuccess(response))
        console.log(response)
        if (response.request.status === 500) {
            return alert('로그인에 실패하였습니다')
        } else if (response.request.status === 401){
            return alert('비밀번호가 올바르지 않습니다')
        }
        return response.data
    }catch(error){
         console.log('실패')
         yield put(userActions.loginFailure(error));
    }
}
export function* watchLogin() {
    yield takeLatest(userActions.loginRequest, login)
}