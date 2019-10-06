import React, { useGlobal, useState } from "reactn";
import TweetForm from "../components/TweetForm";
import Tweet from "../components/Tweet";
import client from "../api/client";

const Home = () => {
  const { 0: token } = useGlobal("token");

  const [tweetState, setTweetState] = useState({
    isSubmitted: false,
    errors: null,
    message: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await client.post(
        "/post/add-tweet",
        { message: tweetState.message },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setTweetState({
        isSubmitted: true,
        message: tweetState.message,
        errors: null
      });
    } catch (error) {
      setTweetState({
        isSubmitted: false,
        message: tweetState.message,
        errors: error
      });
      console.log(error);
    }
  };

  return (
    <>
      <h1>Welcome to real fake Twitter!</h1>
      <div>
        {token && (
          <>
            <TweetForm
              handleSubmit={handleSubmit}
              message={tweetState}
              setMessage={setTweetState}
            />
            <Tweet message={tweetState} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
