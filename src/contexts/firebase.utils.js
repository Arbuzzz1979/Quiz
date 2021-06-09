import { auth, db, storage } from "../firebase";


export const _init_TopScoresArray = (querySnapshot)=> {
  let usersScore = [];
  querySnapshot.forEach((doc) => {
    let record = doc.data();
    usersScore.push({
      uid: doc.id,
      name: record.displayName,
      score: record.totalScore,
      defaultAvatar: record.defaultAvatar,
    })
  });
  return usersScore
}


export const _init_UserQuizHistory = (querySnapshot)=> {
  let searchQuiz = [];
  querySnapshot.forEach((doc) => {
    let record = doc.data();
    searchQuiz.push({
      score: record.score,
      points: record.points,
      createdAt: record.createdAt,
      quizId: record.quizId,
      answers: record.answers,
    });
  });  
  return searchQuiz
}
 
export const _init_UserAvatarUrlObject = (result)=> {
  let obj={}
  result.items.forEach((imageRef) => {
    imageRef
    .getDownloadURL()
    .then((url)=> obj[imageRef.name]=url)
  });
  return obj
}

