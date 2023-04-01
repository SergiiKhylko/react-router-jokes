import {Redirect, Route, Switch} from "react-router-dom";
import Jokes from "./pages/Jokes";
import JokeDetails from "./pages/JokeDetails";
import AddJoke from "./pages/AddJoke";
import {Fragment} from "react";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Fragment>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/jokes"/>
          </Route>
          <Route path="/jokes" exact>
            <Jokes/>
          </Route>
          <Route path="/jokes/:jokeId">
            <JokeDetails/>
          </Route>
          <Route path="/new-joke">
            <AddJoke/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Fragment>
    </Layout>
  );
}

export default App;
