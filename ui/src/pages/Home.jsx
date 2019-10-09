import React, { useGlobal, useState, useEffect } from "reactn";
import TweetForm from "../components/TweetForm";
import Tweet from "../components/Tweet";
import client from "../api/client";
import Users from "../components/Users";

const Home = () => {
  const { 0: token } = useGlobal("token");
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    const { data } = await client.get("/post");

    setTweets(data);
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <>
      <h1>Welcome to real fake Twitter!</h1>
      <div>
        {token && (
          <>
            <h1>Posts</h1>
            <TweetForm onSuccess={t => setTweets([...tweets, t])} />
            {tweets.map(tweet => (
              <Tweet key={tweet._id} tweet={tweet} />
            ))}
            <h1>Active users </h1>
            <Users />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
