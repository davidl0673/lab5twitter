import React from "reactn";

const Tweet = props => {
  if (props.message.isSubmitted) {
    return <div> {props.message.message}</div>;
  } else {
    return null;
  }
};

export default Tweet;
