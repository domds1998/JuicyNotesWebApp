import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { GlobalStyle, Main } from '../styles/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JumbotronPage from './JumbotronPage';
import CollectionsPage from './CollectionsPage';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Main>
          <Switch>
            <Route exact path="/welcome">
              <JumbotronPage />
            </Route>
            <Route exact path="/collections">
              <CollectionsPage />
            </Route>
          </Switch>
        </Main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
