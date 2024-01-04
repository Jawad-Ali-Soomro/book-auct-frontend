import React, { useState } from "react";
import "../Styles/Login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async () => {
    await axios
      .post("http://localhost:4000/api/v1/login/user", {
        email: email,
        password: password,
      })
      .then((res) =>
        res.data.message == "Logged In"
          ? localStorage.setItem("user_info", JSON.stringify(res.data.user)) +
            window.location.reload()
          : toast.error(res.data.message)
      );
  };
  const continueWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider).then((res) => {
      toast.success(`Account Created Mr : ${res.user.displayName}`);
    });
  };
  const continueWithGithub = async () => {
    await signInWithPopup(auth, githubProvider).then((res) => {
      toast.success(`Account Created Mr : ${res.user.displayName}`);
    });
  };
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
                  <button
                    style={{ background: "#0fca82", color: "white" }}
                    onClick={continueWithGoogle}
                  >
                    <i className="uil uil-google"></i>
                    <span>Continue With Google</span>
                  </button>
                  <button
                    style={{ background: "black", color: "white" }}
                    onClick={continueWithGithub}
                  >
                    <i className="uil uil-github"></i>
                    <span>Continue With Github</span>
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
                        <label htmlFor="email">EMAIL</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    ) : null}
                    {step == 2 ? (
                      <div className="input-sect flex col">
                        <label htmlFor="password">PASSWORD</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    ) : null}
                    {step == 1 ? (
                      <button
                        className="btn-next"
                        onClick={() => setstep(step + 1)}
                      >
                        Next
                      </button>
                    ) : (
                      <button className="btn-next" onClick={loginUser}>
                        Login
                      </button>
                    )}
                    <button
                      className="show-more"
                      onClick={() => {
                        setShowSSO(true);
                      }}
                    >
                      SSO
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
