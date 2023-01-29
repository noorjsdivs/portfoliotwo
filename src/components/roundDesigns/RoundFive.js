import React from "react";

const RoundFive = () => {
  return (
    <div className="w-96 h-96 rounded-full absolute bottom-0 -left-10">
      <div className="w-full h-full relative animate-reverse-spin">
        <div className="w-24 h-24 rounded-full bg-yellow-500 absolute -bottom-10 left-16 blur-xl"></div>
        <div className="w-28 h-28 rounded-full bg-designColor absolute top-32 -right-10 blur-2xl"></div>
      </div>
    </div>
  );
};

export default RoundFive;
