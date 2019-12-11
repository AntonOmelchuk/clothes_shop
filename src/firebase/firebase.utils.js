import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBDwb8elqinO9wr1WNeH6cSaMq39JBc-DQ',
  authDomain: 'crwn-db-eebfc.firebaseapp.com',
  databaseURL: 'https://crwn-db-eebfc.firebaseio.com',
  projectId: 'crwn-db-eebfc',
  storageBucket: 'crwn-db-eebfc.appspot.com',
  messagingSenderId: '313721852252',
  appId: '1:313721852252:web:099fbe7017c448fd12b199',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('failed create user profile', err.message);
    }
  }

  return userRef;
};

export const convertCollectionsShapshotToMap = collections => {
  const convertedCollections = collections.docs.map(docShapshot => {
    const {title, items} = docShapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docShapshot.id,
      title,
      items,
    };
  });

  return convertedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
