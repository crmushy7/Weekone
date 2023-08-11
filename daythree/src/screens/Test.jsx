import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <div>
      Test {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ADD COUNT
      </button>
      <input
        value={email}
        placeholder="set Email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default Test;
