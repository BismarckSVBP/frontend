import React from "react";

const PartyCard = ({
  name,
  imageUrl,
  contactNumber,
  date,
  time,
  venue,
  taglines,
  highlights,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-black text-white font-sans rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-2/3 w-full relative p-6 bg-gradient-to-r from-black via-zinc-900 to-yellow-900">
        {/* Background crowd image overlay (optional): use bg or absolute layer */}

        {/* Concentric circles */}
        <div className="absolute top-4 left-4 w-24 h-24 border-4 border-white border-dashed rounded-full animate-spin-slow opacity-20"></div>

        <p className="text-sm tracking-wide text-yellow-400 mb-2">
          NEW ENTRIES ADDED TO THE ARRAY — HELLO FRESHERS!
        </p>

        <h1 className="text-5xl font-extrabold text-yellow-400 mb-2">
          FRESHER’S
        </h1>
        <h2 className="text-2xl font-bold tracking-widest mb-4">PARTY2K25</h2>

        <div className="inline-block bg-yellow-300 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
          {highlights.join(" | ")}
        </div>

        <div className="bg-white text-black px-4 py-2 inline-block font-bold text-lg rounded-md mb-4">
          {date}
        </div>

        <p className="mb-2 text-sm">
          <span className="block font-semibold text-lg">{venue.split("\n")[0]}</span>
          {venue.split("\n").slice(1).map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </p>

        {/* Arrows & Shapes */}
        <div className="absolute top-10 right-10 text-yellow-400 text-xl font-bold">
          <span className="animate-pulse">&gt;&gt;&gt;&gt;&gt;</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 w-full bg-black p-6 flex flex-col justify-center items-center text-center relative">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">{name}</h3>
        <p className="text-white text-sm mb-4">{taglines}</p>

        <div className="border-4 border-blue-400 rounded-md overflow-hidden w-40 h-48 mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-left w-full bg-yellow-400 text-black py-3 px-4 font-bold text-xl rounded-full mb-4">
          START <span className="text-4xl">{time}</span>
        </div>

        <div className="text-white text-sm font-medium">
          <p>CONTACT US:</p>
          <p className="text-lg text-yellow-400 font-bold">{contactNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default PartyCard;
