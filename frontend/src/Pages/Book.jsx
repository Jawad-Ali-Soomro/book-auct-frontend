import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const [bookVal, setValue] = useState({});
  console.log(typeof bookVal);
  const _id = useParams();
  useEffect(() => {
    const getData = async () => {
      axios
        .get(`http://localhost:4000/api/v1/get/book/${_id.id}`)
        .then((res) => setValue(res.data.findBook));
    };
    return () => {
      getData();
      console.log(bookVal);
    };
  }, []);

  return (
    <div className="main-book-page flex" style={{ height: "100vh" }}>
      <div className="img-sect flex">
        <img src={bookVal.coverImage} alt="" />
      </div>
      <div className="main-book-content flex col align-start">
        <h1 className="flex col align-start">
          {bookVal.bookName} <span>Price : {bookVal.originalPrice}$</span>
        </h1>
        <p>{bookVal.description}</p>
        <h2 className="flex justify-between">
          <span>Book Author</span>
          {bookVal.bookAuthor}
        </h2>
        <button>Bid</button>
        <button style={{ background: "red" }}>Buy</button>
      </div>
    </div>
  );
};

export default Book;
