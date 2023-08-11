import React from "react";

const Custominput = (props) => {
  const { label, height, placeholder, value, onpress } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "110%",
        fontFamily: "sans-serif",
        marginTop: "2%",
        marginBottom: 10,
        // padding: "2%",
      }}
    >
      <span>{label}</span>
      <input
        value={value}
        onChange={onpress}
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          padding: "3%",
        }}
        placeholder={placeholder}
        height={height}
      ></input>
    </div>
  );
};

export default Custominput;
