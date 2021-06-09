import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
//IMPORT ELEMENTS
import * as S from "./elements.sc";

///////////////////////
// Component: NavBar //
///////////////////////
export default function Registration() {
  //from context
  const { currentUser, logout } = useAuth();
  
  //history
  const history = useHistory();

  //state
  const [error, setError] = useState();

  
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

  return (
    <S.Links>
          {!currentUser ? (
            <>
              <Link to="/login">
                Log&nbsp;In
              </Link>
              <Link  to="/signup">
                Sign&nbsp;Up
              </Link>
            </>
          ) : (
            <>
              <S.Logout>
                <FontAwesomeIcon icon={faSignOutAlt} onClick={handleLogout}/>
              </S.Logout>
            </>
          )}
    </S.Links>
  );
}
