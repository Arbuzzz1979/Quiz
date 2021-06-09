import React from 'react'
import styled from "styled-components";

//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";
//GENERATE ID
import { v4 as uuidv4 } from "uuid";

import ScoreItem from './ScoreItem'
import ScoreItemCurrentUser from './ScoreItemCurrentUser'

export default function UserScore() {
  const { topScore, allUserAvatarUrl, userAvatar, currentUser, userProfile } = useAuth();
  

  const selectAvatar = (uid, defaultAvatar)=>{
    if (currentUser&&(uid===currentUser.uid)) {
      return userAvatar? userAvatar 
                       : allUserAvatarUrl[uid]? allUserAvatarUrl[uid] 
                                              : defaultAvatar}

    return allUserAvatarUrl[uid]? allUserAvatarUrl[uid] : defaultAvatar
  }

  return (

    <div>
      {currentUser ? (
          <ScoreItemCurrentUser currentUser={currentUser} userProfile={userProfile} topScore={topScore} selectAvatar={selectAvatar}/>
      ) : (
          <ScoreItem topScore={topScore} selectAvatar={selectAvatar}/>
      )}
    </div>

  )
}

const List = styled.div`
  /* padding:2rem; */
  display: grid;
  grid-template-columns: min-content max-content;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.7rem;
  align-items: center;
  /* grid-template-columns: repeat(3, min-content max-content); */
`;

const Avatar = styled.img`
        width: 3.5rem;
        border-radius: 50%;
        display: block;
`

const Details = styled.div`
font-size: 1.2rem;
line-height:1.6rem;
color: var(--color-primary);

  h4 {
    color: var(--color-primary-dark);
    font-size: 1.6rem;
    line-height:1.6rem;
  }


`