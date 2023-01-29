import React from "react";

const RoundOne = () => {
  return (
    <div className="w-96 h-96 rounded-full absolute top-0 -left-10">
      <div className="w-full h-full relative animate-spin-slow">
        <div className="w-32 h-32 rounded-full bg-designColor absolute top-0 blur-xl"></div>
        <div className="w-24 h-24 rounded-full bg-green-600 absolute -bottom-10 left-16 blur-xl"></div>
        <div className="w-28 h-28 rounded-full bg-designColor absolute top-32 -right-10 blur-2xl"></div>
      </div>
    </div>
  );
};

export default RoundOne;
