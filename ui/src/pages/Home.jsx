import React, {useGlobal } from "reactn";
import Tweet from "../components/Tweet";

const Home = () => {
  const { 0: token } = useGlobal("token");

  return (
    <>
    <h1>Welcome to real fake Twitter!</h1>
    <div>
    {token && (
      <Tweet/>
    )}
    </div>
    </>
  )
}

export default Home;