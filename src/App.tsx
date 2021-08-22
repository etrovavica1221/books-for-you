import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
