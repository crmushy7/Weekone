import React, { useState, useEffect } from "react";
import Customizeddiv from "./Customizeddiv";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustumButton from "./CustumButton";
const DivCreator = () => {
  const [indexes, setIndexes] = useState(0);
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "99%",
          width: "98%",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid red",
          borderRadius: "0.5%",
          backgroundColor: "whitesmoke",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "20%",
            width: "99%",
            justifyContent: "space-between",
            borderTopRightRadius: "2%",
            backgroundColor: "#D4EFDF",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20%",
              height: "100%",
              color: "red",
            }}
          >
            <p
              style={{
                fontSize: "1.3em",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Blogim!
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "70%",
              alignItems: "center",
              height: "10vh",
              justifyContent: "space-evenly",
            }}
          >
            <CustumButton label="Home" path="/" />
            <CustumButton label="New_Blog" path="/NewBlog" />
            <CustumButton label="gallery" path="" />
            <CustumButton label="New_image" path="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "70%",
            width: "90%",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontFamily: "sans-serif",
              borderBottom: "1px solid #FF1493",
            }}
          >
            All blogs
          </div>
          {/* Render the divs */}
          <div>
            {data?.map((post, index) => {
              return <Customizeddiv data={post} />;
            })}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "10%",
              backgroundColor: "#FF1493",
              justifyContent: "center",
              marginTop: "2%",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "1.2em",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Blogim!
            </div>
            <div>Copyright 2022 All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivCreator;
