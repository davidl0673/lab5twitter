import React, { useGlobal } from "reactn";
import Tweet from "./components/Tweet";

const Home = () => {
  const { 0: token } = useGlobal("token");

  return (
    <>
    <h1>Welcome to real fake Twitter!</h1>
    <div>
      <h1>Home {JSON.stringify(token)}</h1>
      <h1>Tweet it up  </h1>
      <Tweet/>
    </div>
    </>
  )
}

export default Home;