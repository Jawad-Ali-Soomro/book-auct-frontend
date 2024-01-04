import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Styles/Profile.css";

const Profile = () => {
  const data = localStorage.getItem("user_info");
  const [mainData, setMainData] = useState();
  const originalData = JSON.parse(data);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:4000/api/v1/get/user/${originalData._id}`)
        .then((res) => setMainData(res.data.user));
    };
    return () => {
      setInterval(() => {
        fetchData();
      }, 300);
    };
  }, []);

  return (
    <div className="profile">
      {
        <>
          {mainData !== undefined ? (
            <>
              <img src={mainData.avatar} alt="" />
              <h1>{mainData.username}</h1>
              <h1>{mainData.phone}</h1>
              <h1>{mainData.email}</h1>
              <button className="btn-update">Update</button>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </>
      }
    </div>
  );
};

export default Profile;
