import React, { useState } from "react";
import "./create-account.css";

export default function CreateAccount ( props ) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [isHaveAccount, setIsHaveAccount] = useState(false);
  const authData = [
    {
      firstName: "q",
      lastName: "q",
      email: "q@mail.ru",
      password: "q"
    },
    {
      firstName: "w",
      lastName: "w",
      email: "w@mail.ru",
      password: "w"
    },
    {
      firstName: "e",
      lastName: "e",
      email: "e@mail.ru",
      password: "e"
    },
    {
      firstName: "r",
      lastName: "r",
      email: "r@mail.ru",
      password: "r"
    },
    {
      firstName: "t",
      lastName: "t",
      email: "t@mail.ru",
      password: "t"
    },
    {
      firstName: "y",
      lastName: "y",
      email: "y@mail.ru",
      password: "y"
    },
  ]

  const createAccountModalChanger = () => setIsHaveAccount(true)

  const currentUserData = (e) => {
    e.preventDefault();
    let flag = false; 
    for ( let i = 0; i < authData.length; i ++ ){
      if (email.toLowerCase() === (authData[i].email.toLowerCase()) && password.toLowerCase() === (authData[i].password.toLowerCase())) {
        flag = true;
        break;
      }
    }
    if (flag) {
      props.closeModal();
      props.signUpChanger();
      console.log("Welome!");
    } else {
      console.log("Incorrect login or password");
    }
  }

   
  return (
    isHaveAccount ? (
      <div className="account-modal-wrapper" hidden={props.hiddenModal}>
      <div className="account-modal">
        <div className="top-wrapper">
          <h3>SIGN UP</h3>
          <div className="close-button" onClick={props.closeModal}></div>
        </div>
        <form className="account-form">
          <input className="account-input" placeholder="Email" type="email" onChange={e => setEmailValue(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required/>
          <input className="account-input" placeholder="Password" type="password" onChange={e => setPasswordValue(e.target.value)} pattern="^[A-Za-zА-Яа-яЁё0-93._,-]+$" required/>
          <input type="checkbox" className="checkbox" id="personalNews" name="news" value="yes"/>
          <label for="personalNews" className="label-for-checkbox">
            Let's get personal! We'll send you only the good stuff: <br/> Exclusive early access to Sale, new arrivals and promotions. No nasties.
          </label>
          <p className="privacy-policy">By signing up you agree to <a href="#"><u><b>Terms of Service</b></u></a> and <a href="#"><u><b>Privacy Policy</b></u></a></p>
          <button className="account-form-button" onClick={currentUserData}>SIGN UP</button>
        </form>
      </div>
    </div>
    ) : (
      <div className="account-modal-wrapper" hidden={props.hiddenModal}>
        <div className="account-modal">
          <div className="top-wrapper">
            <h3>CREATE ACCOUNT</h3>
            <div className="close-button" onClick={props.closeModal}></div>
          </div>
          <form className="account-form">
            <input className="account-input" placeholder="First Name" type="text" onChange={e => setFirstName(e.target.value)} pattern="^[A-Za-zА-Яа-яЁё0-93._,-]+$" required/>
            <input className="account-input" placeholder="Last Name" type="text" onChange={e => setLastName(e.target.value)} pattern="^[A-Za-zА-Яа-яЁё0-93._,-]+$" required/>
            <input className="account-input" placeholder="Email" type="email" onChange={e => setEmailValue(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required/>
            <input className="account-input" placeholder="Password" type="password" onChange={e => setPasswordValue(e.target.value)} pattern="^[A-Za-zА-Яа-яЁё0-93._,-]+$" required/>
            <input type="checkbox" className="checkbox" id="personalNews" name="news" value="yes"/>
            <label for="personalNews" className="label-for-checkbox">
              Let's get personal! We'll send you only the good stuff: <br/> Exclusive early access to Sale, new arrivals and promotions. No nasties.
            </label>
            <p className="privacy-policy">By signing up you agree to <a href="#"><u><b>Terms of Service</b></u></a> and <a href="#"><u><b>Privacy Policy</b></u></a></p>
            <button className="account-form-button" onClick={currentUserData}>SIGN UP</button>
          </form>
          <h4><a href="#" onClick={createAccountModalChanger}><u>I HAVE AN ACCOUNT</u></a></h4>
        </div>
      </div>
    )
  )
}
