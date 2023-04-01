import {Fragment, useRef, useState} from 'react';

import Loader from '../UI/Loader';
import styles from './JokeForm.module.css';
import Card from "../UI/Card";
import {Prompt} from "react-router-dom";

const JokeForm = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const topicInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTopic = topicInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddJoke({ topic: enteredTopic, text: enteredText });
  }

  const formFocusHandler = event => {
    setIsFocused(true);
  }

  const sendDataHandler = () => {
    setIsFocused(false);
  }

  return (
    <Fragment>
      <Prompt when={isFocused} message={() =>
        "Do want to leave this page? You will lost all data from the form"}></Prompt>
      <Card>
        <form
          className={styles.form}
          onSubmit={submitFormHandler}
          onFocus={formFocusHandler}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <Loader />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor='topic'>Topic</label>
            <input type='text' id='topic' ref={topicInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button onClick={sendDataHandler} className='btn'>Add Joke</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default JokeForm;
