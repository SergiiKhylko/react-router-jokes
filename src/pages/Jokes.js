import JokeList from "../components/jokes/JokeList";
import useHttp from "../hooks/use-http";
import {getJokes} from "../hooks/firebase-api";
import {useEffect} from "react";
import Loader from "../components/UI/Loader";
import NoJokesFound from "../components/jokes/NoJokesFound";

const Jokes = () => {

  const {
    sendHttpRequest,
    status,
    data: jokes,
    error
  } = useHttp(getJokes, true);

  useEffect(() => {
    sendHttpRequest().then(() => {});
  }, [sendHttpRequest]);

  if (status === "pending") {
    return <div className="centered">
      <Loader />
    </div>
  }

  if (error) {
    return <p className="focused">{error}</p>
  }

  if (status === "completed" && (!jokes || jokes.length === 0)) {
    return <NoJokesFound />
  }


  return <JokeList jokes={jokes}/>;
};

export default Jokes;