import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Styles/Profile.css";
import { DNA } from "react-loader-spinner";
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import toast from "react-hot-toast";


const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState('');
  const [updatePage, setUpdatePage] = useState(false);
  const data = localStorage.getItem("user_info");
  const [mainData, setMainData] = useState();
  const originalData = JSON.parse(data);
    const handleFileChange = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'book-auct');
  
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/deq6ikdw8/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      ).then()
  
      const data = await response.json();
      setImage(data.secure_url)
    }
    const upadteUser = async() => {
      await axios.patch(`http://localhost:4000/api/v1//update/user/${originalData._id}` ,
       {username , email , phone , avatar : image}).then(toast.success('Profile Updated Successfully'))
    }
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
    <>
      {updatePage == false ? (
        <div className="profile">
          {
            <>
              {mainData !== undefined ? (
                <>
                  <img src={mainData.avatar} alt="" />
                  <h1>{mainData.username}</h1>
                  <h1>{mainData.phone}</h1>
                  <h1>{mainData.email}</h1>
                  <button
                    className="btn-update"
                    onClick={() => setUpdatePage(true)}
                  >
                    Update
                  </button>
                </>
              ) : (
                <h1>
                  <DNA
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
                </h1>
              )}
            </>
          }
        </div>
      ) : (
        <div className="update-page flex">
          <div className="input-sect flex col">
            <div className="btn-profile flex">
              <img src={image} alt="" />
              <input
                type="file"
                id="inputFile"
                style={{ opacity: 0 }}
                onChange={handleFileChange}
              />
              <label htmlFor=""><i className="uil uil-camera"></i></label>
            </div>
          </div>
          <div className="input-sect flex col">
            <label htmlFor="">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-sect flex col">
            <label htmlFor="">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-sect flex col">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="inpt-sect">
            <button className="btn-update" onClick={upadteUser}>
              update
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
