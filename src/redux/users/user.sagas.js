import {takeLatest, all, call, put} from 'redux-saga/effects';

import {UserActionTypes} from './types';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from './user.action';

import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from '../../firebase/firebase.utils';

export function* sagaSnapshotFromUser(user) {
  const userRef = yield call(createUserProfileDocument, user);
  const userSnapshot = yield userRef.get();
  yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
}

export function* sagaGoogleSignIn() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield sagaSnapshotFromUser(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* sagaEmailSignIn({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield sagaSnapshotFromUser(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* sagaCheckUserSignIn() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield sagaSnapshotFromUser(userAuth);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* sagaSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* watcherGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, sagaGoogleSignIn);
}

export function* watcherEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, sagaEmailSignIn);
}

export function* watcherCheckUserSignIn() {
  yield takeLatest(UserActionTypes.CHECK_USER_SIGN_IN, sagaCheckUserSignIn);
}

export function* watcherSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, sagaSignOut);
}

export default function* userSaga() {
  yield all([
    call(watcherGoogleSignInStart),
    call(watcherEmailSignInStart),
    call(watcherCheckUserSignIn),
    call(watcherSignOutStart),
  ]);
}
