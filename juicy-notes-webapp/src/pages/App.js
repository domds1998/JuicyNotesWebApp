import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { GlobalStyle, Main } from '../styles/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JumbotronPage from './JumbotronPage';
import CollectionsPage from './CollectionsPage';
import CollectionPage from './CollectionPage';



function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/welcome">
              <JumbotronPage />
            </Route>
            <Route exact path="/collections">
              <CollectionsPage />
            </Route>
            <Route exact path="/collection">
              <CollectionPage />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
