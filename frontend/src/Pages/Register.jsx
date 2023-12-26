import React, { useState } from "react";
import "../Styles/Login.css";

const Register = () => {
  const submitRegister = (e) => {
    e.preventDefault();
  };
  const [options, setOptions] = useState(false);
  const [step, setstep] = useState(1);
  const [showSSO, setShowSSO] = useState(false);
  return (
    <>
      {step <= 4 ? (
        <>
          {showSSO == true ? (
            <div className="single-signon">
              <div className="main-sso flex">
                <div className="wrap flex col">
                  <i
                    className="uil uil-multiply closebtn"
                    onClick={() => {
                      setShowSSO(false);
                    }}
                  ></i>
                  <button style={{ background: "green", color: "white" }}>
                    <i className="uil uil-google"></i>
                    <span>Continue With Google</span>
                  </button>
                  <button style={{ background: "royalblue", color: "white" }}>
                    <i className="uil uil-facebook"></i>
                    <span>Continue With Facebook</span>
                  </button>
                  <button style={{ background: "blueviolet", color: "white" }}>
                    <i className="uil uil-twitter"></i>
                    <span>Continue With Twitter</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="main-form flex">
              <form
                action=""
                onClick={submitRegister}
                className="flex col"
                style={{ padding: "20px" }}
              >
                {options == false ? (
                  <>
                    <img src="\logo.png" alt="" />
                    <h1>Register</h1>
                    {step == 2 ? (
                      <div className="input-sect flex col">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" />
                      </div>
                    ) : null}
                    {step == 1 ? (
                      <div className="input-sect flex col">
                        <label htmlFor="password">USERNAME</label>
                        <input type="text" />
                      </div>
                    ) : null}
                    {step == 3 ? (
                      <div className="input-sect flex col">
                        <label htmlFor="password">PHONE NUMBER</label>
                        <input type="text" />
                      </div>
                    ) : null}
                    {step == 4 ? (
                      <div className="input-sect flex col">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" />
                      </div>
                    ) : null}
                    {step <= 4 ? (
                      <button
                        className="btn-next"
                        onClick={() => setstep(step + 1)}
                      >
                        {step <= 3 ? "Next" : "Register"}
                      </button>
                    ) : null}
                    <button
                      className="show-more"
                      onClick={() => {
                        setShowSSO(true);
                      }}
                    >
                      SSo
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </form>
              {step > 1 ? (
                <button className="btn-back" onClick={() => setstep(step - 1)}>
                  <i className="uil uil-arrow-left"></i>
                </button>
              ) : null}
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default Register;
