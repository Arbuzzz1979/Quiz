import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//BOOTSTRAP
import { Form, Button, Card, Alert } from "react-bootstrap";
//IMPORT ELEMENTS
import * as S from "./elements.sc";
//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";
import { useAlert } from "../../../contexts/AlertContext";


import {defaultAvatarImg} from '../../../assets/constants/defaultAvatar'

//////////////////////////////
// Component: UpdateProfile //
//////////////////////////////
export default function UpdateProfile() {
  //init reference
  const avatarRef = useRef();
  const nameRef = useRef()
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const currentPasswordRef = useRef();


  //from context
  const { currentUser, userProfile, userAvatar, updateEmail, updateProfile, updateAvatar, updatePassword } = useAuth();
  const {setAlertMessage} = useAlert();
  

  //state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar]=useState();
  const [newPassword, setNewPassword] = useState(false);
  const [fileAvatar, setFileAvatar]=useState();

  //history
  const history = useHistory();

  useEffect(()=>{
    console.log("userProfile.defaultAvatar=>",userProfile.defaultAvatar)
    userAvatar? setAvatar(userAvatar)
              : setAvatar(userProfile.defaultAvatar)    
  },[userAvatar])

// Callback from a <input type="file" onchange="onChange(event)">
function changeAvatar(event) {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = function(event) {
    setAvatar(event.target.result)
    console.log(event.target.result)
  };

  reader.readAsDataURL(file);
}

//submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    
    
    const promises = [];

    if (nameRef.current.value) {
      promises.push(updateProfile(nameRef.current.value));
    }

    if (newPassword) {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Password do not match");
      }
      promises.push(updatePassword(passwordRef.current.value, currentPasswordRef.current.value));
    }

    if (avatarRef.current.files[0]) {
      promises.push(updateAvatar(avatarRef.current.files[0]))
    }

    setLoading(true);

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setAlertMessage("Your profile has been successfully updated!");
        setLoading(false);
        
      });
  }
  return (
    <>
    <S.Heading>User Profile</S.Heading>
    <S.AuthContainer>
      <S.ProfileInfo />
      <S.ProfileData>
        <Card>
          <S.Avatar>
            <Card.Img variant="top" src={avatar}/>
          </S.Avatar>
          <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {/* {currentUser.email} */}
            <Form onSubmit={handleSubmit}>
            <Form.Group id="avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" ref={avatarRef} onChange={changeAvatar}/>
              </Form.Group>                 
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" ref={nameRef} required defaultValue={userProfile.displayName} />
            </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  disabled
                  defaultValue={userProfile.email}
                />
              </Form.Group>
   

              <Form.Group id="checkbox">
                <Form.Check type="checkbox" label="Change password" onChange={()=>setNewPassword(!newPassword)} />
              </Form.Group>
            {newPassword&& <>
              <Form.Group id="current-password">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={currentPasswordRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  required
                  
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>New Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
            
            </>}



              <Button disabled={loading} variant="secondary" className="w-100" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
          <div className="w-100 text-center mt-2 mb-3">
            <Link to="/profile">Cancel</Link>
          </div>
        </Card>
      </S.ProfileData>
    </S.AuthContainer>
    </>    
  );
}
