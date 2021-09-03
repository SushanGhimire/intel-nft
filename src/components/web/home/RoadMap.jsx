import React from "react";
import RoadMapCard from "./RoadMapCard";

function RoadMap() {
  let roadmaps = [
    {
      header: "Smooth Launch",
      des: "Successfully launch all 10,000 piggies to community with a fair minting process.",
      flex: "row",
    },
    {
      header: "Marketplace Integration",
      des: "You will be able to buy/sell your piggies digitaleyes.market right after the launch!",
      flex: "rev",
    },
    {
      header: "Piggy Gang Merchandise ",
      des: "We will create cool hoodies, tees and mags with exclusive discount to piggy holders!",
      flex: "row",
    },
    {
      header: "Rival Gangs",
      des: "Everyone knows that Piggies are the cutest, but there are other gangs in the farm as well. Another animal drop to come in the near future, stay tuned!",
      flex: "rev",
    },
  ];
  return (
    <div
      className="flex  py-10 wp flex-col"
      style={{
        backgroundColor: "#FFF2F9",
      }}
    >
      <div className="mx-auto text-text text-4xl font-bold tracking-wide">
        Roadmap
      </div>
      {/* card  */}
      <div className="flex flex-col mt-10">
        {roadmaps.map((road, index) => {
          return <RoadMapCard key={index} {...road} />;
        })}
      </div>
    </div>
  );
}

export default RoadMap;
