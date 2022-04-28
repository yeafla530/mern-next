import {PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from "redux-saga/effects"
import { tableActions } from "../reducers/tableReducer.ts";
import { createApi } from "../api/tableApi.ts";

// 1. interface - 타입
interface TableCreateType{
    type: String,
    payload: {
        title: string, content: string, created_at: string,
    }
}

interface TableCreateSuccessType{
    type: string,
    payload: {
        title: string, content: string, created_at: string,
    }
}

function* create(table: TableCreateType) {
    try{
        alert('진행3 : saga내부 create')
        const response : TableCreateSuccessType = yield createApi(table.payload)
        yield put(tableActions.createSuccess(response))
        // window.location.href = '/'
    } catch(error) {
        alert('진행3 : saga 내부 create 실패')
        yield put(tableActions.createFailure(error))
    }
}

export function* watchCreate() {
    yield takeLatest(tableActions.createRequest, create)
}