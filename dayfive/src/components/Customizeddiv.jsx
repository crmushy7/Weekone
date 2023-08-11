import React from "react";
import CustumButton from "./CustumButton";

const Customizeddiv = (props) => {
  const { data } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#D4EFDF",
          height: "20vh",
          width: "90%",
          justifyContent: "space-around",
          paddingTop: "2%",
          paddingBottom: "2%",
          marginLeft: "5%",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "70%",
          }}
        >
          <div>
            {data.id}
          </div>
          <div>
            {data.title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "15%",
          }}
        >
          <CustumButton
            title={data.title}
            value={data.id}
            label="Update"
            path={`/update/${data.id}`}
          />
          <button
            style={{
              backgroundColor: "red",
              height: "20%",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customizeddiv;
