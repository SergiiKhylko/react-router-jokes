import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import {Fragment} from "react";
import HighlightedJoke from "../components/jokes/HighlightedJoke";

const JokeDetails = () => {

  const DUMMY_JOKES = [
    {
      id: "j1",
      topic: "Programming",
      text: "How many programmers does it take to change a light bulb? None - It's a hardware problem"
    },
    {
      id: "j2",
      topic: "General",
      text: "How many bones are in the human hand? A handful of them."
    }
  ]

  const params = useParams();
  const routeMatch = useRouteMatch();
  const joke = DUMMY_JOKES.find(joke => joke.id === params.jokeId);

  if (!joke) {
    return <h1>404 - no jokes</h1>
  }

  return (
    <Fragment>

      <HighlightedJoke text={joke.text} topic={joke.topic} />
      <Route path={`${routeMatch.path}`} exact>
        <div className="centered" >
          <Link className="btn--empty" to={`${routeMatch.url}/comments`}>Show Comments</Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <div className="centered" >
          <Link className="btn--empty" to={`${routeMatch.url}`}>Hide Comments</Link>
        </div>
        <Comments/>
      </Route>
    </Fragment>
  );
};

export default JokeDetails;