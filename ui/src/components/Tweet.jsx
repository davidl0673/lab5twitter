import React from "reactn";

const Tweet = props => {
  const { tweet } = props;

  return (
    <div>
      {tweet.message} by {tweet.user.email}
    </div>
  );
};

export default Tweet;

// will help my understanding if i declare a  variable elsewhere and just pass one thing
