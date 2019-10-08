import React from "reactn";

const TweetForm = props => {
  const { message, setMessage, handleSubmit } = props;

  // const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = e => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });
  };

  // console.log(message.message);
  return (
    <>
      <div>Tweet it up!</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={message.message}
          onChange={handleChange}
          placeholder="tweety time!"
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default TweetForm;
