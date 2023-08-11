import React from "react";
import Custominput from "./Custominput";

const Newcustomdiv = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#D4EFDF",
          height: "60vh",
          width: "90%",
          //   justifyContent: "space-around",
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
            // justifyContent: "space-evenly",
            width: "70%",
            //   border: "1px solid black",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "sans-serif",
              justifyContent: "center",
              //   paddingLeft: "30%",
              height: "10%",
              fontWeight: "bold",
              //   color: "#D4EFDF",
            }}
          >
            <p
              style={{
                color: "#FF1493",
              }}
            >
              Add a new blog
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            height: "75%",
            // border: "1px solid black",
            justifyContent: "space-between",
          }}
        >
          <Custominput label="Blog title:" placeholder="My blog" height="2" />
          <Custominput
            label="Blog body:"
            placeholder="My blog body"
            height="3"
          />
          <Custominput label="Blog Author:" placeholder="My name" height="7" />
          <Custominput
            label="Author Image:"
            placeholder="https://path/image?q"
            height="3"
          />
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#FF1493",
              marginTop: "6%",
              borderRadius: "20%",
            }}
          >
            <p>Add Blog</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newcustomdiv;
