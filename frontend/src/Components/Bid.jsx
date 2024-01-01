import axios from "axios";
import React, { useState , useEffect, Suspense } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Bid = () => {
  const _id = useParams()
  let [bidVal, setBidVal] = useState();
  let [currentBid , setCurrentBid] = useState([])
  const placeBid = async() => {
    await axios.post('http://localhost:4000/api/v1/place/bid' , {price : bidVal , bookId: _id.id , id : "65890cd9aabcac0d0d75a553"})
    .then((res) => console.log(res.data))
    toast.success('Bid Placed Successfully!')
    // window.location.reload()
  }
  useEffect(() => {
    const getData = () => {
      axios.get('http://localhost:4000/api/v1/get/main/bids').then((res) => setCurrentBid(res.data))
    }
    return () => {
      setInterval(() => {
        getData()
      }, 300);
    }
  }, [])
  return (
    <div className="bid-sect flex">
      <div className="main-bid flex col">
          <i className="uil uil-multiply close flex" onClick={() =>window.location.reload()}></i>
        <div className="input-sect flex">
          <input
          placeholder="Enter Bid Amount"
            type="text"
            value={bidVal}
            onChange={(e) => setBidVal(e.target.value)}
          />
          <button onClick={placeBid}>Place Bid</button>
        </div>
      </div>
      <div className="bid-main flex col">
        {
          currentBid.map((item) => {
            if(item.bookId == _id.id){
            return <div key={item._id} className="main-user flex">
              <img src={item.avatar} alt="" />
              <h1>{item.userName}</h1>
              <p>{item.price} $</p>
            </div>
            }
          })
        }
      </div>
    </div>
  );
};

export default Bid;
