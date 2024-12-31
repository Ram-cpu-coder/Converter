import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] text-center">
      <h1 className="text-5xl p-5 font-bold">Welcome To Converters</h1>
      <h2 className="text-2xl italic">
        Head to <span className="bg-sky-500 px-2 text-white">Services</span> for
        list of converters
      </h2>
    </div>
  );
};

export default Home;
