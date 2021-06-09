import React, {useState, useEffect} from "react";
//IMPORT ELEMENTS
import * as S from "./ReviewsElements.sc";
import {Loader} from "../../styles/Spinner"
//ID GENERATE
import { v4 as uuidv4 } from "uuid";
//IMPORT VIDEO BACKGROUND
import bgVideo from "../../assets/video/TypingKeyboard.mp4";

import ReviewsForm from "./ReviewsForm"
import { useFirebase } from "../../contexts/FirebaseContext";

//// Section: Reviews ////
export default function Reviews() {
  const [loading, setLoading] = useState(true)
  const [avatarLoading, setAvatarLoading] = useState(true);
  const { usersProfile, allReviews, usersAvatar } = useFirebase()

  useEffect(()=>{
    usersAvatar&&usersProfile&&allReviews&&setLoading(false)
  },[allReviews, usersProfile, usersAvatar])
  
  const getName = (uid)=> {
    return usersProfile.filter(user=>user.uid===uid)[0].displayName
  }
  const getAvatar = (uid)=> {
    if (usersAvatar[uid]) return usersAvatar[uid]
    return usersProfile.filter(user=>user.uid===uid)[0].defaultAvatar
  }

  return (
    <S.Section>
      <S.Video>
        <video className="content" autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
          <source src={bgVideo} type="video/webm" />
          Your browser is not supported!
        </video>
      </S.Video>
      
      <S.Container>
        <h4>Reviews</h4>
        <S.Reviews>
          {!loading&&<>
          {allReviews.map((review) => {
            return (
            <S.Item key={uuidv4()}>
              <Loader animation="border" variant="secondary" show={avatarLoading? 1: 0} />
              <S.User 
                src={getAvatar(review.uid).toString()} 
                onLoad={()=>setAvatarLoading(false)} 
                show={avatarLoading? 0: 1}/>
              <S.Text>
                <h3>{getName(review.uid)}</h3>
                 <p>{review.review}</p>
              </S.Text>
            </S.Item>
            )
          })
          }

          </>}

        </S.Reviews>
        <S.Form>
          <ReviewsForm />
        </S.Form>
      </S.Container>
    </S.Section>
  );
}
