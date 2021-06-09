import React from "react";
//IMPORT ELEMENTS
import * as S from "./PageElements.sc";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";


import Header from "../components/sections/Header";
import Overview from "../components/sections/Overview";
import PageSideBar from "../components/sections/PageSideBar";
import PagePanel from "../components/sections/PagePanel";
import Footer from "../components/sections/Footer";

//Auth components
import Signup from "../components/pages/Auth/Signup";
import Login from "../components/pages/Auth/Login";
import ForgotPassword from "../components/pages/Auth/ForgotPassword";
import UpdateProfile from "../components/pages/Auth/UpdateProfile";
import Profile from "../components/pages/Auth/Profile"; 
import Quizzes from "../components/pages/Quizzes"
import Quiz from "../components/pages/Quizzes/Quiz"
import Articles from "../components/pages/Articles";
import ArticlePage from "../components/pages/Articles/ArticlePage";
import Resources from "../components/pages/Resources";
import History from "../components/pages/Quizzes/Quiz/Report/History";

export default function Page({ match }) {
  console.log("match", match);
  return (
    <S.Container>
      <Header />
      <PagePanel/>
      {/* <PageSideBar isOpen="true" fixed={false}/> */}
      <Overview />
      {/* <S.Background/> */}
      <S.Content>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/quiz" component={Quizzes} exact />
          <PrivateRoute path="/quiz/:id" component={Quiz} />
          <Route path="/articles" component={Articles} exact />
          <Route path="/articles/:id" component={ArticlePage} />
          <Route path="/resources" component={Resources} exact />
          <PrivateRoute path="/history" component={History} exact />
        </Switch>
      </S.Content>
      <Footer />
    </S.Container>
  );
}
