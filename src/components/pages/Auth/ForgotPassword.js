import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
//BOOTSTRAP
import { Form, Button, Card, Alert } from "react-bootstrap";
//IMPORT ELEMENTS
import * as S from "./elements.sc";
//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";

///////////////////////////////
// Component: ForgotPassword //
///////////////////////////////
export default function ForgotPassword() {
  //init reference
  const emailRef = useRef();
  
  //from context
  const { resetPassword } = useAuth();
  
  //state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  //submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("login");
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for futher instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }
  return (
    <>
    <S.Heading>User Authentication</S.Heading>    
    <S.AuthContainer>
      <S.AuthInfo />
      <S.AuthData>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Password Reset</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button disabled={loading} variant="secondary" className="w-100" type="submit">
                Reset Password
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/login">Login</Link>
            </div>
          </Card.Body>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Card>
      </S.AuthData>
    </S.AuthContainer>
    </>
  );
}
