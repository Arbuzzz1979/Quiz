import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
//BOOTSTRAP
import { Form, Card, Alert } from "react-bootstrap";
//IMPORT ELEMENTS
import * as S from "./ReviewsElements.sc";
//CONTEXT
import { useAuth } from "../../contexts/AuthContext";
import { useFirebase } from "../../contexts/FirebaseContext";

export default function ReviewsForm() {
  //init reference
  const reviewRef = useRef();
  //from context
  const { currentUser } = useAuth();
  const { sendReview, allReviews } = useFirebase()
  
  //state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSending, setIsSending] = useState("");

  //submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setIsSending("");
      setLoading(true);
      await sendReview(currentUser.uid, reviewRef.current.value);
      reviewRef.current.value = "";
      setIsSending("Thanks! Your review has been added");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Your review</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {isSending && <Alert variant="success">{isSending}</Alert>}
          {currentUser ? 
            <>
              <Form onSubmit={handleSubmit}>
              <Form.Group id="review">
                  <Form.Control as="textarea" rows="5" ref={reviewRef} required />
                </Form.Group>
                <S.Button disabled={loading} type="submit">
                  Send
                </S.Button>
              </Form>
            </>:<>
              <h3>Please login to send a review. </h3>
              <Link to="/login">
              <S.Button>
                LogIn
              </S.Button>
              </Link>
              
            </>
          }
        </Card.Body>
      </Card>
    </>
  )
  
}
