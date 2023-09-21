// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { getFirestore,doc,getDoc,setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9l_MWdsEzz7AuEGtHTM251Lc49D3O064",
  authDomain: "crown-clothing-db-70b58.firebaseapp.com",
  projectId: "crown-clothing-db-70b58",
  storageBucket: "crown-clothing-db-70b58.appspot.com",
  messagingSenderId: "413567558635",
  appId: "1:413567558635:web:5e1a14146f3b5d86cd6fae"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    promt: "select-account"
})
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

export const db = getFirestore();



//Below methodmis to get data form authenmtication and store it in fireStore Database
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef)
    const userSnapshot =  await getDoc(userDocRef);
    console.log(userSnapshot)
  //If user data doesnot exist on DB then create  or set the   document with the data from userAuth in my Collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        console.log(userAuth)
        const createdAt = new Date();
        try {
            await setDoc(
                userDocRef, {
                    displayName,
                email,
                createdAt,
                ...additionalInformation,
            }
            )
        } catch (error) {
            console.log('Erorr while creating the user:', error.message);
        }
    }

    return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback); 