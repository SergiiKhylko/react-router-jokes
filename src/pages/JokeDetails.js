import {Route, useParams} from "react-router-dom";
import Comments from "../components/comments/Comments";
import {Fragment} from "react";

const JokeDetails = () => {

  const params = useParams();

  return (
    <Fragment>
      <h1>Joke Details page</h1>
      <p>Joke ID: {params.jokeId}</p>

      <Route path="/jokes/:jokeId/comments">
        <Comments/>
      </Route>
    </Fragment>
  );
};

export default JokeDetails;