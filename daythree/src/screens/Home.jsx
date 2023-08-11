import React from "react";
import CustomizedButton from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div> This isHome</div>
      <div>
        <CustomizedButton
          length="3"
          title="Go Back"
          onPress={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Home;
