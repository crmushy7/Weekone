import React from "react";
import axios from "axios";
import { useState } from "react";
const Home = () => {
  const [value, setValue] = useState("");
  const getElement = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setValue(res.data);
    });
  };

  const data = [
    {
      title: "my title",
      body: "my body",
    },
    {
      title: "my title",
      body: "my body",
    },
    {
      title: "my title",
      body: "my body",
    },
    {
      title: "my title",
      body: "my body",
    },
    {
      title: "my title",
      body: "my body",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid black",
          height: "50%",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: "10%",
            // justifyContent: "center",
          }}
          onClick={getElement}
        >
          Get Element
        </button>

        {value &&
          value.map((post, index) => {
            return <p>{post.title}</p>;
          })}
      </div>
    </div>
  );
};

export default Home;
