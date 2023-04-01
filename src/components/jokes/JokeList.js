import { Fragment } from 'react';

import JokeItem from './JokeItem';
import styles from './JokeList.module.css';
import {useHistory, useLocation} from "react-router-dom";

const PARAM_SORT = "sort";
const PARAM_ASC = "asc";
const PARAM_DESC = "desc";

const sortJokes = (jokes, isAsc) => {
  return jokes.sort((jokes1, jokes2) => {
    return isAsc
      ? jokes1.id > jokes2.id ? 1 : -1
      : jokes1.id < jokes2.id ? 1 : -1;
  });
};

const JokeList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryString = location.search;
  const urlParams = new URLSearchParams(queryString);
  const sortValue = urlParams.get(PARAM_SORT);
  const isAsc = sortValue === PARAM_ASC;
  const sortedJokes = sortJokes(props.jokes, isAsc);
  console.log(sortedJokes)

  const toggleSortingHandler = () => {
    history.push(`${location.pathname}?${PARAM_SORT}=` + (isAsc ? PARAM_DESC : PARAM_ASC));
  };

  return (
    <Fragment>
      <div className={styles.sort}>
        <button onClick={toggleSortingHandler}>Sort Jokes {isAsc ? "Descending" : "Ascending"}</button>
      </div>
      <ul className={styles.list}>
        {props.jokes.map((joke) => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            topic={joke.topic}
            text={joke.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default JokeList;
