import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from '../reducers/userReducer'

// Function to fetch users from the API
function* fetchUsers() {
  try {
    yield put(fetchUsersStart())
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
    yield put(fetchUsersSuccess(response.data))
  } catch (error) {
    yield put(fetchUsersFailure(error.message))
  }
}

// Watcher saga
function* userSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers)
}

export default userSaga