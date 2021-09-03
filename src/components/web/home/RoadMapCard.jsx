import React from "react";

function RoadMapCard({ flex, header, des }) {
  return (
    <div className={`flex justify-between items-center `}>
      <div
        className={`flex-1 ring-6 ring-blue-500 rounded-xl p-4  ${
          flex === "row" ? "" : "opacity-0"
        } `}
      >
        <div className="text-3xl font-bold">{header}</div>
        <p className="text-lg font-medium">{des}</p>
      </div>
      <div
        className={`w-10 h-2 bg-blue-500 ${flex === "row" ? "" : "opacity-0"}`}
      ></div>
      <div className="rounded-full p-3 ring-8 ring-blue-500"></div>
      <div
        className={`w-10 h-2 bg-blue-500 ${flex === "rev" ? "" : "opacity-0"}`}
      ></div>
      <div
        className={`flex-1 ring-6 ring-blue-500 rounded-xl p-4  ${
          flex === "rev" ? "" : "opacity-0"
        } `}
      >
        <div className="text-3xl font-bold">{header}</div>
        <p className="text-lg font-medium">{des}</p>
      </div>
    </div>
  );
}

export default RoadMapCard;
