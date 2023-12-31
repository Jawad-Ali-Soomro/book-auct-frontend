import axios from "axios";
import React, { useState , useEffect } from "react";

const Bid = () => {
  let [bidVal, setBidVal] = useState();
  let [currentBid , setCurrentBid] = useState([])
  useEffect(() => {
    const getData = () => {
      axios.get('http://localhost:4000/api/v1/get/main/bids').then((res) => setCurrentBid(res.data.bids))
    }
    return () => {
      getData()
    }
  }, [])
  currentBid.map((item) => {
    const fetchData = async (id) => {
      try {
        console.log('Request Body:', { id });
        const response = await axios.post('http://localhost:4000/api/v1/get/user/profile', { id });
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(item.id)
  })
  return (
    <div className="bid-sect flex col">
      {
        currentBid.map((item) => {
         const getBid = async() => {
          const id = JSON.stringify(item.id)
          const res = await axios.get('http://localhost:4000/api/v1/get/user/profile', {id}).then((res) => {
            console.log(res.data);
          })
         }
         getBid()
        })
      }
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
