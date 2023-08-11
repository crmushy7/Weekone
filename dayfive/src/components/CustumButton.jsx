import React from "react";
import { useNavigate } from "react-router-dom";

const CustumButton = (props) => {
  const navigate = useNavigate();
  const { label, path, value, title } = props;
  return (
    <div
      style={{
        display: "flex",
        width: "2vw",
      }}
    >
      <button
        style={{
          borderRadius: "2%",
        }}
        onClick={() => navigate(path)}
      >
        {label}
      </button>
    </div>
  );
};

export default CustumButton;
