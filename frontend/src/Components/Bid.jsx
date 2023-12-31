import axios from "axios";
import React, { useState , useEffect } from "react";

const Bid = () => {
  let [bidVal, setBidVal] = useState();
  let [currentBid , setCurrentBid] = useState([])
  useEffect(() => {
    const getData = () => {
      axios.get('http://localhost:4000/api/v1/get/main/bids').then((res) => setCurrentBid(res.data))
    }
    return () => {
      getData()
    }
  }, [])
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
          <button>Place Bid</button>
        </div>
      </div>
      <div className="bid-main flex col">
        {
          currentBid.map((item) => {
            return <div className="main-user flex">
            <img src={item.avatar} alt="" />
            <h1>{item.userName}</h1>
            <p>{item.price} $</p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Bid;
