import React, { useGlobal, useState } from "reactn";
import client from "../api/client";

const TweetForm = props => {
  const { 0: token } = useGlobal("token");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const postTweet = async e => {
    e.preventDefault();

    try {
      setError(null);
      const { data } = await client.post(
        "/post/",
        {
          message
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setMessage("");
      console.log(data);

      if (props.onSuccess) props.onSuccess(data);
    } catch (error) {
      setError("Tweet needs to be between 3 and 150 characters long!");
    }
  };

  return (
    <>
      <div>Tweet it up!</div>
      {error && (
        <div>
          <em>{error}</em>
        </div>
      )}
      <form onSubmit={postTweet}>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Enter a message..."
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default TweetForm;
