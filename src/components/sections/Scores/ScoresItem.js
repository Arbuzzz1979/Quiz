import React, {useEffect, useState} from "react";

//GENERATE ID
import { v4 as uuidv4 } from "uuid";
//IMPORT ELEMENTS
import * as S from "./ScoreStyle.sc";
import {Loader} from "../../../styles/Spinner"

import { useFirebase } from "../../../contexts/FirebaseContext";

export default function ScoreItem({ topScore }) {
  const [loading, setLoading] = useState(true);
  const [avatarLoading, setAvatarLoading] = useState(true);
  const { usersProfile, usersAvatar } = useFirebase()

  useEffect(()=>{
    if (usersProfile.length&&usersAvatar) setLoading(false)
  },[usersProfile, usersAvatar])

  const selectAvatar = (uid)=>{
    return usersAvatar[uid]? usersAvatar[uid] : usersProfile.filter(user=>user.uid===uid)[0].defaultAvatar
  }

  if (loading) return null

  return (
    <>
      {topScore.slice(0,3).map((score) => (
        <S.Row key={uuidv4()}>
          <Loader animation="border" variant="secondary" show={avatarLoading? 1: 0} />
          <S.Avatar 
            src={selectAvatar(score.uid).toString()} 
            onLoad={()=>setAvatarLoading(false)} 
            show={avatarLoading? 0: 1}/>
          
          <S.Details>
            <h4>{score.name}</h4>
            {score.score} score
          </S.Details>
        </S.Row>
      ))}
    </>
  );
}

