import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadError } from './actions';

export function* load(): Generator<any, void, any>{
  try {
    const response = yield call(api.get, '/users/kaecio/repos')

    yield put(loadSuccess(response.data))
  } catch (error) {
    yield put(loadError());
  }
}