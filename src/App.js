import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AccountBox } from "./components/Login_Register/accountBox";
import Home from "./pages";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <AppContainer>
          <Route exact path="/signin" component={AccountBox} />
        </AppContainer>
      </Switch>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;