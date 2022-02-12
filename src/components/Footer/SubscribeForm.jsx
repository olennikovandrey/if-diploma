import React, { useState } from "react";
import "./footer.css"

export default function SubscribeForm( props ) {
  const [email, setEmail] = useState("");
  const [subscribeMsg, setSubscribeMsg] = useState("Sign up for exclusive early sale access and tailored new arrivals.");

  const spinAdder = () => {
    document.getElementById("spin").classList.remove("hide")
  };

  const spinRemover = () => {
    document.getElementById("spin").classList.add("hide")
  };

  const ifResponseOk = () => {
    setTimeout((() => document.getElementById("subscribe-msg").style.display = "none"), 5000);
    props.formVisibleChanger();
    setSubscribeMsg("Thank you for subscribing to our newsletter!");
    document.getElementById("subscribe-msg").style.display = "block";
    
  };

  const ifResponseBad = () => {
    setTimeout((() => document.getElementById("subscribe-msg").style.display = "none"), 5000);
    spinRemover();
    setSubscribeMsg("Please, enter correct email");
    document.getElementById("subscribe-msg").style.display = "block";
  };

  const subscribe = async (e) => {
    e.preventDefault();
    spinAdder();
    try {
      const response = await fetch("https://modnikky-api.herokuapp.com/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          "email": email
        })
      });
      const result = response.json();
      console.log(result);
      if (response.status === 200) {
        ifResponseOk()
      } else {
        ifResponseBad()
      }
    } catch (error) {
      console.error("Something wrong with subscribe, try again:", error);
    }
  };

  return (
    props.isFormVisible ?
      (
      <>
        <div className="subscribe-container">
          <h3>SIGN UP FOR UPDATES</h3>
          <p className="updates-notice">{subscribeMsg}</p>
        </div>
        <div id="subscribe-msg">
          <p>{subscribeMsg}</p>
          <span></span>
        </div>
        <form className="form-for-subscribe">
            <input type="text" placeholder="Your email adress" onChange={e => setEmail(e.target.value)} required pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"/>
            <button onClick={subscribe}>JOIN</button>
        </form>
        <div id="spin" className="spin-wrapper hide">
          <div className="spinner"></div>
        </div>
      </>
      ) : (
      <>
        <div className="subscribe-container">
          <h3>SIGN UP FOR UPDATES</h3>
          <p className="updates-notice">{subscribeMsg}</p>
        </div>
        <div id="subscribe-msg">
          <p>{subscribeMsg}</p>
          <span></span>
        </div>
      </>
    )
  );
};
