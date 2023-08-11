import React, { useEffect, useState } from "react";
import Custominput from "../components/Custominput";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
      });
  }, []);

  function handleUpdate() {
    let updated = {
      body,
      title,
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, updated)
      .then((res) => console.log(res, "updated data"));
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#D4EFDF",
          height: "60vh",
          width: "90%",
          alignItems: "center",
          paddingTop: "2%",
          marginLeft: "5%",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "sans-serif",
              justifyContent: "center",
              height: "10%",
              fontWeight: "bold",
            }}
          >
            <p
              style={{
                color: "#FF1493",
              }}
            >
              Update blog
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            height: "75%",
          }}
        >
          <Custominput
            label="Blog title:"
            placeholder="My blog title"
            value={title}
            onpress={(e) => setTitle(e.target.value)}
          />
          <Custominput
            label="Blog Body:"
            placeholder="My blog body"
            value={body}
            onpress={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#FF1493",
              marginTop: "6%",
              borderRadius: "20%",
            }}
            onClick={handleUpdate}
          >
            <p>Update Blog</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
