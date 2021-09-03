import React from "react";

function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center wp bg">
      {/* title  */}
      <h1 className="text-text font-bold text-5xl">Meet the crypto traders!</h1>
      <p className="text-text text-3xl font-medium text-center max-w-4xl mx-auto mt-7 mb-10">
        10,000 cute & cruel piggies living on the Solana lands. Each of them are
        randomly generated with more than 120+ hand drawn traits!
      </p>
      <p className="text-2xl">Minting will start in</p>
      <div className="text-2xl font-semibold mt-3">1d 0h 23m 51s</div>
    </div>
  );
}

export default Home;
