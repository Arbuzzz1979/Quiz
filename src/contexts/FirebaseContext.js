import React, { useContext, useState, useEffect } from "react";
import { auth, db, storage } from "../firebase";
import firebase from "firebase/app";
import {useAuth} from './AuthContext'

const FirebaseContext = React.createContext();

export function useFirebase() {
  return useContext(FirebaseContext);
}

export default function FirebaseProvider({ children }) {
  const {currentUser, allUserAvatarUrl} = useAuth()
  const [loading, setLoading] = useState(true);
  const [allReviews, setAllReviews] = useState();
  const [usersProfile, setUsersProfile] = useState([]);
  const [usersAvatar, setUsersAvatar] = useState();

   

  function sendReview (userID, reviewText) {
    const newReview = {
      uid: userID,
      review: reviewText,
      createdAt: new Date().toDateString(),
      sort: firebase.firestore.FieldValue.serverTimestamp(),
    };
    return db.collection("reviews").doc(userID).set(newReview);
  }

  const getUsersProfile = async()=>{
    const response=db.collection('users');
    const data=await response.get();
    const users = []
    data.docs.forEach(item=>{
      let data = item.data()
      let obj = {
        uid: item.id,
        displayName: data.displayName,
        defaultAvatar: data.defaultAvatar,
        email: data.email,
        totalScore: data.totalScore
      }
      // console.log("item",item.data())
      users.push(obj)
    })
    setUsersProfile(users)
  }

  const getUsersAvatar = async()=>{
    storage.ref().listAll()
    .then((result) => {
      let obj={}
      result.items.forEach((imageRef) => {
        imageRef
        .getDownloadURL()
        .then((url)=> obj[imageRef.name]=url)
      })
      console.log(obj)
      setUsersAvatar(obj);
    })
  }

  useEffect(() => {
    getUsersProfile();
    getUsersAvatar();

    db.collection("reviews")
      .orderBy("sort", "desc").limit(3)
      .onSnapshot((querySnapshot) => {
        let reviews = [];
        querySnapshot.forEach((doc) => {
          let record = doc.data();
          reviews.push({
            createdAt: record.createdAt,
            review: record.review,
            uid: record.uid
          });
        })
        setAllReviews(reviews);
      });

    setLoading(false);
  }, []);

  const value = {
    usersProfile,
    usersAvatar,
    sendReview,
    allReviews
  };

  return (
    <FirebaseContext.Provider value={value}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
}
