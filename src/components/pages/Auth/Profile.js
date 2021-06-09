import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//BOOTSTRAP
import { Card, Button, Alert } from "react-bootstrap";
//COMPONENTS
import Statistics from "../Quizzes/Quiz/Report/Statistics";
//IMPORT ELEMENTS
import * as S from "./elements.sc";
//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";
//Styled
import styled from "styled-components";

import { defaultAvatarImg } from "../../../assets/constants/defaultAvatar";

////////////////////////
// Component: Profile //
////////////////////////
export default function Profile() {
  //state
  const [error, setError] = useState();
  const [isHistory, setIsHistory] = useState();

  //from context
  const {
    currentUser,
    userProfile,
    userAvatar,
    quizHistory,
    logout,
  } = useAuth();

  useEffect(() => {
    setIsHistory(quizHistory.length !== 0);
  }, [quizHistory]);

  // if (quizHistory.length !== 0) setIsHistory(true)
  // console.log("quizHistory", quizHistory);

  //history
  const history = useHistory();

  //current avatar
  const avatar = userAvatar ? userAvatar : userProfile.defaultAvatar;

  //logout handler
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  // console.log("currentUserData",currentUserData)
  return (
    <>
    <S.Heading>User Profile</S.Heading>
    <S.AuthContainer>
      <S.ProfileInfo />
      
      <S.ProfileData>
        <Card>
          <S.Avatar>
            <Card.Img variant="top" src={avatar} />
          </S.Avatar>
          <Card.Body>
            <h2 className="text-center mb-4">{userProfile.displayName}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            
            {isHistory && (
          <S.History>
            <h3>Your Quiz History</h3> 
            <Statistics show={3}/>
          </S.History>
        )}
            <Link to="/update-profile" className="btn btn-secondary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
          <div className="w-100 text-center mb-4">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </Card>
      </S.ProfileData>
    </S.AuthContainer>
    </>
  );
}
