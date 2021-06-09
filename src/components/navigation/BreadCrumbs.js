import React from "react";
import { useLocation, Link } from "react-router-dom";
//BOOTSTRAP
import { Breadcrumb } from "react-bootstrap";

//BREADCRUMB NAME MAP
const breadcrumbNameMap = {
  "/login": "Login",
  "/signup": "Sign Up",
  "/profile": "Profile",
  "/update-profile": "Update Profile",
  "/forgot-password": "Password Reset",
  "/articles": "Articles",
  "/quiz": "Quiz",
  "/quiz/html_quiz": "HTML Quiz",
  "/quiz/css_quiz": "CSS Quiz",
  "/quiz/js_quiz": "JS Quiz",
  "/resources": "Resources",
  "/history": "Your all results"
  
};

////////////////////////////
// Component: Breadcrumbs //
////////////////////////////
const Breadcrumbs = () => {
  //pathnames
  let location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item key="-1" linkAs="span">
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <Breadcrumb.Item active key={index}>
              {breadcrumbNameMap[to]}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key={index} linkAs="span">
              <Link to={to}>{breadcrumbNameMap[to]}</Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
