import React, { useState } from "react";
import "../Styles/Login.css";

const Login = () => {
  const submitLogin = (e) => {
    e.preventDefault();
  };
  const [options, setOptions] = useState(false);
  const [step, setstep] = useState(1);
  const [showSSO, setShowSSO] = useState(false);
  return (
    <>
      {step < 3 ? (
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
                  <button>
                    <i className="uil uil-google" style={{color:'green'}}></i>
                    <span>Continue With Google</span>
                  </button>
                  <button>
                    <i className="uil uil-facebook"></i>
                    <span>Continue With Facebook</span>
                  </button>
                  <button>
                    <i className="uil uil-linkedin"></i>
                    <span>Continue With Linked-In</span>
                  </button>
                  <button>
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
                onClick={submitLogin}
                className="flex col"
                style={{ padding: "20px" }}
              >
                {options == false ? (
                  <>
                    <img src="\logo.png" alt="" />
                    <h1>Login</h1>
                    {step == 1 ? (
                      <div className="input-sect flex col">
                        <label htmlFor="email">
                          EMAIL
                        </label>
                        <input type="email" />
                      </div>
                    ) : null}
                    {step == 2 ? (
                      <div className="input-sect flex col">
                        <label htmlFor="password">
                          PASSWORD
                        </label>
                        <input
                          type="password"
                        />
                      </div>
                    ) : null}
                    {step <= 2 ? (
                      <button
                        className="btn-next"
                        onClick={() => setstep(step + 1)}
                      >
                        {step == 1 ? "Next" : "Login"}
                      </button>
                    ) : null}
                    <button
                      className="show-more"
                      onClick={() => {
                        setShowSSO(true);
                      }}
                    >
                      <i className="uil uil-more"></i>
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

export default Login;
