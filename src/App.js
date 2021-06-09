import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Compose from "./compose";

//StyleComponents
import GlobalStyle from "./styles/GlobalStyle";

//IMPORT CONTEXT PROVIDER
import AuthProvider from "./contexts/AuthContext";
import FirebaseProvider from "./contexts/FirebaseContext";
import ArticlesProvider from "./contexts/ArticlesContext";
import QuizProvaider from "./contexts/QuizContext";
import ResourcesProvaider from "./contexts/ResourcesContext";
import ModalProvider from "./contexts/ModalContext";
import AlertProvider from "./contexts/AlertContext";

//COMPONENTS
//Layout components
import Home from "./views/Home"
import Page from "./views/Page"
import ScrollTopArrow from "./components/navigation/ScrollTopArrow"

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollTopArrow/>
      <Compose
        components={[
          Router,
          
          AlertProvider,
          AuthProvider,
          FirebaseProvider,
          ModalProvider,
          QuizProvaider,
          ArticlesProvider,
          ResourcesProvaider,
        ]}
      >
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:id" component={Page} />
        <Page/>
      </Switch>
      
      </Compose>
    </>
  );
}

export default App;
