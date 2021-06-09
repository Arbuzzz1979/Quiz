import React, {useEffect, useState} from 'react'
import styled from "styled-components";

//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";
import { useFirebase } from "../../../contexts/FirebaseContext";
//GENERATE ID
import { v4 as uuidv4 } from "uuid";

import ScoresItem from './ScoresItem'
import ScoresItemCurrentUser from './ScoresItemCurrentUser'

export default function Scores() {
  const [loading, setLoading] = useState(true);

  const { topScore, currentUser } = useAuth();

  useEffect(()=>{
    if (topScore) setLoading(false)
  },[topScore])

  if (loading) return null
  
  return (
    <>
      {currentUser ? (
          <ScoresItemCurrentUser currentUser={currentUser} topScore={topScore} />
      ) : (
          <ScoresItem topScore={topScore} />
      )}
    </>

  )
}
