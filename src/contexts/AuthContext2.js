import React, { useContext, useState, useEffect } from "react";
import { auth, db, storage } from "../firebase";
import firebase from "firebase/app";
import { _init_TopScoresArray, _init_UserQuizHistory, _init_UserAvatarUrlObject } from './firebase.utils'
import { useAlert } from "./AlertContext";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [allUserAvatarUrl, setAllUserAvatarUrl] = useState();
  const [userProfile, setUserProfile] = useState({});
  const [userAvatar, setUserAvatar] = useState(null);
  const [topScore, setTopScore] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const [quizHistory, setQuizHistory] = useState([]);
  const {setAlertMessage} = useAlert();


  //Add new quiz point, calculate best and total point
  function addQuizPoint(quizId, points) {
    let pointsQuiz = userProfile[`${quizId}_BestScore`];
    let dateQuiz = userProfile[`${quizId}_BestScoreDate`];
    let total = userProfile.totalScore;
    let currentDate = new Date().toDateString()

    if (points > pointsQuiz) {
      total = total + points - pointsQuiz;
      pointsQuiz = points;
      dateQuiz =  currentDate;
    } 

    return db.collection("users").doc(auth.currentUser.uid).update({
      totalScore: total,
      [`${quizId}_BestScore`]: pointsQuiz,
      [`${quizId}_BestScoreDate`]: dateQuiz
    });
  }

  //Send new quiz data
  function sendQuiz(score, points, quizId, answers) {
    const newQuiz = {
      userId: auth.currentUser.uid,
      answers, score, points,
      quizId: quizId,
      createdAt: new Date().toDateString(),
      sort: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection("users")
      .doc(auth.currentUser.uid)
      .collection("quiz")
      .add(newQuiz)
      .then((doc) => {
        addQuizPoint(quizId, points);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  }

  //Update avatar image file and get url
  function updateAvatar(file) {
    return storage
      .ref()
      .child(auth.currentUser.uid)
      .put(file)
      .then((uploadTaskSnapshot) => {
        return uploadTaskSnapshot.ref.getDownloadURL();
      })
      .then((url) => {
        setUserAvatar(url);
      });
  }

  //Init user Profile
  function updateUserProfile(email, displayName, avatar) {
    const data = {
      email,
      displayName,
      defaultAvatar: avatar,
      totalScore: 0,
      css_quiz_BestScore: 0,
      html_quiz_BestScore: 0,
      js_quiz_BestScore: 0,
      css_quiz_BestScoreDate: "",
      html_quiz_BestScoreDate: "",
      js_quiz_BestScoreDate: "",
    };
    return db.collection("users").doc(auth.currentUser.uid).set(data);
  }

  //Register a new user
  function signup(email, password, username, avatar_file) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //Login 
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
    .then(
      setAlertMessage("Welcome to Quiz App!")
    );
  }

  //Logout
  function logout() {
    return auth.signOut().then(
      setAlertMessage("You logout successful. Come back soon!")
    );;
  }

  //Reset password
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  //Update email
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  //Update password
  function updatePassword(newPassword, currentPassword) {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(credential).then((r) => {
      return currentUser.updatePassword(newPassword);
    });
  }

  //Update name
  function updateProfile(displayName) {
    return db.collection("users").doc(auth.currentUser.uid).update({
      displayName,
    });
  }

  // Get List of All Users Avatar Url
  function loadImages() {
    storage.ref().listAll()
      .then((result) => setAllUserAvatarUrl(_init_UserAvatarUrlObject(result)))
  }

  // Get Top Scores Users
  function loadTopScores() {
    db.collection("users")
    .orderBy("totalScore", "desc")
    .limit(5)
    .onSnapshot((querySnapshot) => setTopScore(_init_TopScoresArray(querySnapshot)));
  }    

  // useEffect(()=>{
  //   loadImages()
  //   loadTopScores()
  // },[])


  useEffect(() => {


    const unsubscribe = auth.onAuthStateChanged((user) => {
      
      if (user) {
        db.collection("users").doc(auth.currentUser.uid)
        .onSnapshot((doc) => {
          setUserProfile(doc.data());
          setCurrentUser(user);
          setLoading(false);}
        )

      }
      // setCurrentUser(user);
      // // setAlert("Welcome");

      
      // setLoading(false);

    });
    
    // loadImages()
    // loadTopScores()
    

    return unsubscribe;

  }, []);

  const value = {
    currentUser,
    userProfile,
    userAvatar,
    allUserAvatarUrl,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateUserProfile,
    sendQuiz,
    updateAvatar,
    updateProfile,
    alert,
    quizHistory,
    topScore,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
