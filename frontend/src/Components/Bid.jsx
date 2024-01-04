import axios from "axios";
import React, { useState, useEffect, Suspense } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Bid = () => {
  const data = localStorage.getItem("user_info");
  const originalData = JSON.parse(data);
  const _id = useParams();
  let [bidVal, setBidVal] = useState();
  const [bidSuceess, setBidSuccess] = useState(false);
  let [currentBid, setCurrentBid] = useState([]);
  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:4000/api/v1/get/main/bids")
        .then((res) => setCurrentBid(res.data));
    };
    return () => {
      setInterval(() => {
        getData();
      }, 300);
    };
  }, []);
  const placeBid = async () => {
    axios
      .post("http://localhost:4000/api/v1/place/bid", {
        price: bidVal,
        bookId: _id.id,
        id: originalData._id,
      })
      .then((res) => console.log(res.data))
      .then(setBidSuccess(true));
    toast.success("Bid Placed Successfully!");
  };
  return (
    <div className="bid-sect flex">
      <div className="main-bid flex col">
        <i
          className="uil uil-multiply close flex"
          onClick={() => window.location.reload()}
        ></i>
        <div className="input-sect flex">
          <input
            placeholder="Enter Bid Amount"
            type="text"
            value={bidVal}
            onChange={(e) => setBidVal(e.target.value)}
          />
          {bidSuceess == false ? (
            <button onClick={placeBid}>Place Bid</button>
          ) : (
            <button disabled style={{ background: "gray" }}>
              Place Bid
            </button>
          )}
        </div>
      </div>
      <div className="bid-main flex col">
        {currentBid.map((item) => {
          if (item.bookId == _id.id) {
            return (
              <div key={item._id} className="main-user flex">
                <img src={item.avatar || <Skeleton count={5} />} alt="" />
                <h1>{item.userName || <Skeleton />}</h1>
                <p>{item.price || <Skeleton />} $</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Bid;
