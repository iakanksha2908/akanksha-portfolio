import React from "react";
import "./index.css"; // ya jahan tumhara global CSS hai

const DotGridBackground = () => {
  return (
    <div
      className="
        absolute inset-0
        bg-[radial-gradient(rgba(148,163,184,0.45)_1.2px,transparent_1.2px)]
        bg-[size:20px_20px]
        animate-[moveDots_18s_linear_infinite]
        pointer-events-none
      "
    />
  );
};

export default DotGridBackground;
