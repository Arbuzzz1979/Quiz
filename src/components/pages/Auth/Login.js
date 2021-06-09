import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
//BOOTSTRAP
import { Form, Button, Card, Alert } from "react-bootstrap";
//IMPORT ELEMENTS
import * as S from "./elements.sc";
//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";
import { useAlert } from "../../../contexts/AlertContext";


//////////////////////
// Component: Login //
//////////////////////
export default function Login() {
  //init reference
  const emailRef = useRef();
  const passwordRef = useRef();

  //from context
  const { login } = useAuth();
  const {setAlertMessage} = useAlert();

  //state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //history
  const history = useHistory();
  
  //submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.goBack()
      
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
    console.log("error", error);
  }
  return (
    <>
    <S.Heading>User Authentication</S.Heading>
    <S.AuthContainer>
      <S.AuthInfo />
      <S.AuthData>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>

              <Button disabled={loading} variant="secondary" className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Card.Body>
        </Card>
      </S.AuthData>
    </S.AuthContainer>
    </>
  );
}
