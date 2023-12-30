import React, { useState } from "react";
import toast from "react-hot-toast";

const Bid = () => {
  let [bidVal, setBidVal] = useState(1);
  let currentBid = []
  //   if (bidVal <= 0) {
  //     toast.error("Bid Value Should Not Be Less Than Or Equal To 0");
  //   }
  return (
    <div className="bid-sect flex">
      <div className="main-bid flex col">
        <div className="input-sect flex">
          <input
          placeholder="Enter Bid Amount"
            type="text"
            value={bidVal}
            onChange={(e) => setBidVal(e.target.value)}
          />
          <i className="uil uil-message flex"
          onClick={() => currentBid.push(bidVal)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Bid;
