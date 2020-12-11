import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { GlobalStyle, Main } from '../styles/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JumbotronPage from './JumbotronPage';


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
          </Switch>
        </Main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
