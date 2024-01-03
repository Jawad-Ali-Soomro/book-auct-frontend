import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bid from "../Components/Bid";

const Book = () => {
  const [bid, setBid] = useState(false);
  const [bookVal, setValue] = useState({});
  const [btnValue, setbtnValue] = useState();
  const _id = useParams();
  const getStatus = async () => {
    try {
      const response = await axios
        .get("http://localhost:4000/api/v1/get/bids")
        .then((res) =>
          res.data.Bids.map((item) => {
            if (item.bidId == _id.id) {
              setbtnValue(item?.bidStatus);
            }
          })
        );
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };
  useEffect(() => {
    const getData = async () => {
      axios
        .get(`http://localhost:4000/api/v1/get/book/${_id.id}`)
        .then((res) => setValue(res.data.findBook));
    };
    return () => {
      setInterval(() => {
        getData();
      }, 300);
      getStatus();
    };
  }, []);

  return (
    <>
      <div className="main-book-page flex" style={{ height: "100vh" }}>
        <div className="img-sect flex">
          <img src={bookVal.coverImage} alt="" />
        </div>
        <div className="main-book-content flex col align-start">
          <h1 className="flex col align-start">{bookVal.bookName}</h1>
          <p>{bookVal.description}</p>
          <h2 className="flex justify-between">
            <span>Book Author</span>
            {bookVal.bookAuthor}
          </h2>
          <h2 className="flex justify-between">
            <span>Original Price</span>
            {bookVal.originalPrice} $
          </h2>
          {btnValue == true ? (
            <button onClick={() => setBid(true)}>Bid</button>
          ) : (
            <button disabled style={{ background: "gray", cursor: "auto" }}>
              Bid
            </button>
          )}
          <button style={{ background: "red" }}>Buy</button>
        </div>
      </div>
      {bid == true ? <Bid /> : this}
    </>
  );
};

export default Book;
