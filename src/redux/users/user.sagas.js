import {takeLatest, all, call, put} from 'redux-saga/effects';

import {UserActionTypes} from './types';
import {googleSignInFailure, googleSignInSuccess} from './user.action';
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from '../../firebase/firebase.utils';

export function* sagaGoogleSignIn() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
    );
  } catch (err) {
    yield put(googleSignInFailure(err));
  }
}

export function* watcherGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, sagaGoogleSignIn);
}

export default function* userSaga() {
  yield all([watcherGoogleSignInStart()]);
}
