import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCpgKqzPMu6CRS3FsjpSXCRMkSbYr8XTvw",
    authDomain: "olx-web-a1b0a.firebaseapp.com",
    databaseURL: "https://olx-web-a1b0a.firebaseio.com",
    projectId: "olx-web-a1b0a",
    storageBucket: "olx-web-a1b0a.appspot.com",
    messagingSenderId: "796533326913",
    appId: "1:796533326913:web:a6d21ac23b1ab4861832c0",
    measurementId: "G-N8Q3DJGBVD"
  };

  export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;
    const userRef =firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot)

    if(!snapShot.exists){
      const { displayName , email }= userAuth;
      const createAt = new Date()
    
      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      }
      catch(error){
        console.log("error creating user", error.message)
      }
    }
    return userRef
  }

  export const addCollectionAndDocument =async (collectionsKey, objectsToAdd) => {
    console.log('aabbbbbbbbbb', objectsToAdd)
    const collectionRef = firestore.collection(collectionsKey)

    const batch = firestore.batch();
    objectsToAdd.forEach(obj=>{
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })

    return await batch.commit()
  }

  export const convertCollectionSnapshotToMap = (collections) => {
    const transfformedCollections = collections.docs.map(doc => {
      const {title, items} = doc.data()

      return{
        routeName : encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    })
 
    return transfformedCollections.reduce((accumulator, collection)=> {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;