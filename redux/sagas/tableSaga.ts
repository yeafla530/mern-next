import {PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from "redux-saga/effects"
import { tableActions } from "../reducers/tableReducer.ts";
import { createApi } from "../api/tableApi.ts";
import { deleteApi } from "../api/tableApi.ts";
import { updateApi } from "../api/tableApi.ts";


// 1. interface - 타입
interface TableCreateType{
    type: String,
    payload: {
        _id: string, title: string, content: string, created_at: string,
    }
}

interface TableCreateSuccessType{
    type: string,
    payload: {
        _id: string, title: string, content: string, created_at: string,
    }
}
interface TableDeleteType{
    type: string,
    payload: {
        delid: string,
    }
}

interface TableDeleteSuccessType{
    type: string,
}

interface TableUpdateType{
    type: string,
    payload: {
        updateid: string, title: string, content: string, created_at: string,
    }
}

interface TableUpdateSuccessType{
    type: string,
}

function* create(table: TableCreateType) {
    try{
        // //alert('진행3 : saga내부 create')
        const response : TableCreateSuccessType = yield createApi(table.payload)
        yield put(tableActions.createSuccess(response))
        // window.location.href = '/'
    } catch(error) {
        //alert('진행3 : saga 내부 create 실패')
        yield put(tableActions.createFailure(error))
    }
}

function* deleteTable(table: TableDeleteType) {
    try{
        //alert('진행3 : saga 내부 create')
        const response : TableDeleteSuccessType = yield deleteApi(table.payload) // api
        yield put(tableActions.deleteSuccess(response)) // reducer
    }catch(error){
        //alert(' 진행 3: saga내부 login 실패')
        yield put(tableActions.deleteFailure(error))
    }
}

function* updateTable(table: TableUpdateType) {
    try{
        //alert('진행3 : saga 내부 create')
        const response : TableUpdateSuccessType = yield updateApi(table.payload) // api
        yield put(tableActions.deleteSuccess(response)) // reducer
    }catch(error){
        //alert(' 진행 3: saga내부 login 실패')
        yield put(tableActions.deleteFailure(error))
    }
}

export function* watchCreate() {
    yield takeLatest(tableActions.createRequest, create)
}

export function* watchDelete() {
    yield takeLatest(tableActions.deleteRequest, deleteTable)
}

export function* watchUpdate() {
    yield takeLatest(tableActions.modifyRequest, updateTable)
}