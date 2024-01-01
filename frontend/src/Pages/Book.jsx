import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bid from "../Components/Bid";

const Book = () => {
  const [bid, setBid] = useState(false);
  const [bookVal, setValue] = useState({});
  const _id = useParams();
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
          <button onClick={() => setBid(true)}>Bid</button>
          <button style={{ background: "red" }}>Buy</button>
        </div>
      </div>
      {bid == true ? <Bid /> : this}
    </>
  );
};

export default Book;
