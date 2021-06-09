import React, {useEffect, useState} from "react";
//GENERATE ID
import { v4 as uuidv4 } from "uuid";
//IMPORT ELEMENTS
import { useFirebase } from "../../../contexts/FirebaseContext";
//IMPORT ELEMENTS
import * as S from "./ScoreStyle.sc";
import {Loader} from "../../../styles/Spinner"

export default function ScoreItemCurrentUser({ topScore, currentUser }) {
  const [loading, setLoading] = useState(true);
  const [avatarLoading, setAvatarLoading] = useState(true);
  const { usersProfile, usersAvatar } = useFirebase()

  const isCurrentUserNoTop = topScore.some(el => el.uid  === currentUser.uid );
  
  useEffect(()=>{
    if (usersProfile.length&&usersAvatar) setLoading(false)
  },[usersProfile, usersAvatar])

  const selectProfile = (uid)=>{
    return usersProfile.filter(user=>user.uid===uid)[0]
  }

  const selectAvatar = (uid)=>{
    return usersAvatar[uid]? usersAvatar[uid] : selectProfile(uid).defaultAvatar
  }

    
  if (loading) return null
   return (
    <>
      {topScore.slice(0,3).map((score) => {
        let isCurrent = (score.uid === currentUser.uid)
        
        return <S.Row key={uuidv4()}>
          <Loader animation="border" variant="secondary" show={avatarLoading? 1: 0} />
          <S.Avatar 
            src={selectAvatar(score.uid)} 
            onLoad={()=>setAvatarLoading(false)}
            show={avatarLoading? 0: 1}/>
          <S.Details>
            {isCurrent&&<span>You</span>}  
            <h4>{score.name}</h4> 
            {score.score} score
          </S.Details>
        </S.Row>
      }
      )}
      {!isCurrentUserNoTop&& <S.RowUser key={uuidv4()}>
          <Loader animation="border" variant="secondary" show={avatarLoading? 1: 0} />
          <S.Avatar 
            src={selectAvatar(currentUser.uid)} 
            onLoad={()=>setAvatarLoading(false)}
            show={avatarLoading? 0: 1}/>
          <S.Details>
            <span>You</span>  
            <h4>{selectProfile(currentUser.uid).displayName}</h4> 
            {selectProfile(currentUser.uid).totalScore} score
          </S.Details>
        </S.RowUser>}
    </>
  );
}

