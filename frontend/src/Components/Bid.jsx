import React, { useState } from "react";
import toast from "react-hot-toast";

const Bid = () => {
  let [bidVal, setBidVal] = useState(1);
  //   if (bidVal <= 0) {
  //     toast.error("Bid Value Should Not Be Less Than Or Equal To 0");
  //   }
  return (
    <div className="bid-sect flex">
      <div className="main-bid flex col">
        <label htmlFor="bid">Enter Bid Amount</label>
        <div className="input-sect flex">
          <section onClick={() => setBidVal(bidVal - 1)}>
            <i className="uil uil-minus"></i>
          </section>
          <input
            type="text"
            value={bidVal}
            onChange={(e) => setBidVal(e.target.value)}
          />
          <section onClick={() => setBidVal(bidVal + 1)}>
            <i className="uil uil-plus"></i>
          </section>
        </div>
        <button>Place Bid</button>
      </div>
    </div>
  );
};

export default Bid;
