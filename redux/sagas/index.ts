// 함수의 저장공간이 필요
// * : 제너레이터 함수

import {all} from 'redux-saga/effects'
import { watchJoin } from './userSaga.ts'
import { watchCreate } from './tableSaga.ts'
import { watchDelete } from './tableSaga.ts'
import { watchUpdate } from './tableSaga.ts'



export default function* rootSaga() {
    yield all([watchJoin(), watchCreate(), watchDelete(), watchUpdate()])
}