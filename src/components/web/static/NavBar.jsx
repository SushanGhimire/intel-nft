import React from "react";

function NavBar() {
  return (
    <div className="flex justify-end py-10 space-x-4 items-center fixed top-0 right-10">
      <div>twitter</div>
      <div>discord</div>
      <div>
        <button
          className="px-6 py-4 bg-blue-500 text-white text-xl font-medium rounded-xl
          ring
        "
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default NavBar;
