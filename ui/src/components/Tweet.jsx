import React from "reactn";

const Tweet = props => {
  const { tweet } = props;

  return <div>{tweet.message}</div>;
};

export default Tweet;
