import React from "react";
import Customizeddiv from "../components/Customizeddiv";
import Newcustomdiv from "../components/Newcustomdiv";
import CustumButton from "../components/CustumButton";

const NewBlog = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
          height: "99vh",
          width: "98%",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid red",
          borderRadius: "1%",
          backgroundColor: "whitesmoke",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "10%",
            width: "100%",
            justifyContent: "space-between",
            borderTopLeftRadius: "2%",
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
              width: "60%",
              alignItems: "center",
              height: "100%",
              //   border: "1px solid black",
              justifyContent: "space-around",
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
            // border: "1px solid red",
          }}
        >
          {/* <div
            style={{
              fontWeight: "bold",
              fontFamily: "sans-serif",
              color: "#FF1493",
              borderBottom: "1px solid #FF1493",
            }}
          >
            Add a new blog
          </div> */}
          <Newcustomdiv />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "8%",
            backgroundColor: "#FF1493",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            // border: "1px solid black",
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
  );
};

export default NewBlog;
