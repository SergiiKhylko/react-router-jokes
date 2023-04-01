import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import {Fragment, useEffect} from "react";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import useHttp from "../hooks/use-http";
import {getJoke} from "../hooks/firebase-api";
import Loader from "../components/UI/Loader";

const JokeDetails = () => {

  const {
    sendHttpRequest,
    status,
    data: joke,
    error} = useHttp(getJoke, true);

  const params = useParams();

  useEffect(() => {
    sendHttpRequest(params.jokeId).then();
  }, [sendHttpRequest, params]);
  const routeMatch = useRouteMatch();



  if (status === "pending") {
    return <div className="centered">
      <Loader />
    </div>
  }

  if (error) {
    return <p className="focused">{error}</p>
  }

  if (!joke.text) {
    return <h1>404 - joke not found</h1>
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