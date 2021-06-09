import React from "react";
//GENERATE ID
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export default function ScoreItemCurrentUser({ topScore, selectAvatar, currentUser, userProfile }) {

  
  const isCurrentUserNoTop = topScore.some(el => el.uid  === currentUser.uid );
  
  

  return (
    <List>
      {topScore.map((score) => {
        let isCurrent = (score.uid === currentUser.uid)

        return <ListRow key={uuidv4()}>
          <Avatar src={selectAvatar(score.uid, score.defaultAvatar)} />
          <Details>
            {isCurrent&&<span>You</span>}  
            <h4>{score.name}</h4> 
            {score.score} score
          </Details>
        </ListRow>
      }
      )}
      {!isCurrentUserNoTop&& <ListRowUser key={uuidv4()}>
          <Avatar src={selectAvatar(currentUser.uid, userProfile.defaultAvatar)} />
          <Details>
            
            <span>You</span>  
            <h4>{userProfile.displayName}</h4> 
            {userProfile.totalScore} score
          </Details>
        </ListRowUser>}
    </List>
  );
}

const List = styled.div`
  /* padding:2rem; */
  /* display: grid;
  grid-template-columns: min-content max-content;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.7rem; */
  align-items: center;
  /* grid-template-columns: repeat(3, min-content max-content); */
`;

const ListRow = styled.div`
  /* padding:2rem; */
  display: grid;
  grid-template-columns: min-content max-content;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.7rem;
  align-items: center;
  padding:1.5rem;
  /* grid-template-columns: repeat(3, min-content max-content); */
  span {
    text-align: right;
  font-weight: 700;
  color: var(--color-primary-light);   
  display:block; 
  }
`;

const ListRowUser = styled(ListRow)`
  border-top: var(--line);
`;


const Avatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: block;
`;

const Details = styled.div`
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: var(--color-primary);

  h4 {
    color: var(--color-primary-dark);
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;
