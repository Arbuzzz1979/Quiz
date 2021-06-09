import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//BOOTSTRAP
import { Navbar, Nav } from "react-bootstrap";
//CONTEXT
import { useAuth } from "../../contexts/AuthContext";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
//IMPORT ELEMENTS
import * as S from "./NavbarElements.sc";
import logo from "../../assets/images/logo.png";

///////////////////////
// Component: NavBar //
///////////////////////
export default function NavBar() {
  //from context
  const { currentUser, userProfile, userAvatar, logout } = useAuth();
  
  //history
  const history = useHistory();

  //state
  const [error, setError] = useState();

  //current avatar
  const avatar = userAvatar? userAvatar : userProfile.defaultAvatar
  
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
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <S.Title>QUIZ</S.Title>
          <S.Logo src={logo} alt="logo" />
        </Navbar.Brand>
        <Nav className="ml-auto d-flex align-items-center justify-content-center">
          {!currentUser ? (
            <>
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/profile">
                <S.User>
                  <img
                    src={avatar}
                    alt="User"
                    className="user-photo"
                  />
                  {userProfile.displayName}
                </S.User>
              </Nav.Link>
              <Nav.Link onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar>
    </>
  );
}
