import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'
import HomeDefault from "./pages/HomeDefault";
// Import Css Here 
import './assets/scss/style.scss';

function App() {
  return (
    <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={HomeDefault}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business-consulting"}`} exact component={HomeDefault}/>
                    </Switch>
            </PageScrollTop>
        </Router>
  );
}

export default App;
