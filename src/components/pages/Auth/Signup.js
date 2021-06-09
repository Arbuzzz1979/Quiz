import React, { useRef, useState, useEffect } from "react";
import {Link,useHistory} from 'react-router-dom'
//BOOTSTRAP
import { Form, Button, Card, Alert } from "react-bootstrap";
//IMPORT ELEMENTS
import * as S from "./elements.sc";
//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";

import {defaultAvatarImg} from '../../../assets/constants/defaultAvatar'

///////////////////////
// Component: Signup //
///////////////////////
export default function Signup() {

  //init reference
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const avatarRef = useRef();
  

  //from context
  const { signup, currentUser, updateUserProfile, updateAvatar } = useAuth();
  
  //state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar]=useState();
  const [avatarFile, setAvatarFile]=useState();
  
  //history
  const history = useHistory()

  //Set default avatar
  useEffect(()=>{
    setAvatar(defaultAvatarImg[`avatar_img_${Math.floor(Math.random() * 9) + 1}`])
  },[])

  
  // Callback from a <input type="file" onchange="changeAvatar(event)">
  function changeAvatar(event) {
    let file = event.target.files[0];
    setAvatarFile(file);
    let reader = new FileReader();
    reader.onload = function(event) {
      setAvatar(event.target.result)
    };

    reader.readAsDataURL(file);
  }

  //submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }
    
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      
      if (avatarFile) {
        await updateUserProfile(emailRef.current.value, nameRef.current.value, false)
        await updateAvatar(avatarFile)
      } 
      else {
        await updateUserProfile(emailRef.current.value, nameRef.current.value, avatar)
      }

      history.push("/")
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    
  }


  return (
    <>
    <S.Heading>User Authentication</S.Heading>
    <S.AuthContainer>
      <S.AuthInfo />
      <S.SignupData>
      <Card>
        <S.Avatar>
          <Card.Img variant="top" src={avatar}/>
        </S.Avatar>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {/* {currentUser.email} */}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group id="avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" ref={avatarRef} onChange={changeAvatar}  />
              </Form.Group>              
            <Button disabled={loading} variant="secondary" className="w-100" type="submit">
              Sign Up
            </Button>
            <div className="w-100 text-center mt-3 mb-4">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
          </Form>
        </Card.Body>
      </Card>
      </S.SignupData>
    </S.AuthContainer>
    </>
  );
}

// const AvatarInput = styled(Form.Group)`
//   display: flex;
//   justify-content: space-between;
// `