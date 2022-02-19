import React, { useState, useEffect } from "react";
import "./create-account.css";
import authData from "../../constants/usersData";

export default function CreateAccount ( props ) {
  const [firstName, setFirstNameValue] = useState("");
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [firstNameError, setFirstNameError] = useState("First name input cannot be empty");
  const [lastName, setLastNameValue] = useState("");
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [lastNameError, setLastNameError] = useState("Last name input cannot be empty");
  const [email, setEmailValue] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [password, setPasswordValue] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState("Password cannot be empty");
  const [isHaveAccount, setIsHaveAccount] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "last-name":
      setLastNameDirty(true)
      break
      case "first-name":
      setFirstNameDirty(true)
      break
      case "email":
      setEmailDirty(true)
      break
      case "password":
      setPasswordDirty(true)
      break
    }
  }

  const firstNameHandler = (e) => {
    setFirstNameValue(e.target.value)
    if (!e.target.value) {
      setFirstNameError("This input cannot be empty")
    } else {
      setFirstNameError("")
    }
  }

  const lastNameHandler = (e) => {
    setLastNameValue(e.target.value)
    if (!e.target.value) {
      setLastNameError("This input cannot be empty")
    } else {
      setLastNameError("")
    }
  }

  const emailHandler = (e) => {
    setEmailValue(e.target.value)
    const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailPattern.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email")
    } else {
      setEmailError("")
    }
  }

  const passwordHandler = (e) => {
    setPasswordValue(e.target.value)
    if (e.target.value.length < 6) {
      setPasswordError("Password should contain more then six symbols")
    } else if (!e.target.value) {
      setPasswordError("Password cannot be empty")
    } else {
      setPasswordError("")
    }
  }

  const goToLogin = () => setIsHaveAccount(true)

  const checkExistedUser = (e) => {
    e.preventDefault();
    let isEmailInAuthData = false;
    let isPasswordInAuthData = false;
    for ( let i = 0; i < authData.length; i ++ ) {
      if (email.toLowerCase() === (authData[i].email.toLowerCase()) 
      && password.toLowerCase() === (authData[i].password.toLowerCase())) {
        isEmailInAuthData = true;
        isPasswordInAuthData = true;
      } else if (email.toLowerCase() !== (authData[i].email.toLowerCase()) 
      && password.toLowerCase() === (authData[i].password.toLowerCase()))  {
        isEmailInAuthData = false;
        isPasswordInAuthData = true;
      } else if (email.toLowerCase() === (authData[i].email.toLowerCase()) 
      && password.toLowerCase() !== (authData[i].password.toLowerCase()))  {
        isEmailInAuthData = true;
        isPasswordInAuthData = false;
      }
    }
    if (isEmailInAuthData && isPasswordInAuthData && firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && password.length !== 0) {
      props.closeModal();
      props.signUpChanger();
    } else if (isEmailInAuthData && isPasswordInAuthData && firstName.length === 0 && lastName.length === 0 && email.length !== 0 && password.length !== 0) {
      setFirstNameDirty(true)
      setLastNameDirty(true)
    } else if (firstName.length === 0 && lastName.length === 0 && email.length === 0 && password.length === 0) {
      setFirstNameDirty(true)
      setLastNameDirty(true)
      setEmailDirty(true)
      setPasswordDirty(true)
    } else if (isEmailInAuthData && !isPasswordInAuthData && firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && password.length !== 0) {
      setEmailDirty(false)
      setPasswordDirty(true)
      setPasswordError("Wrong password")
    } else if (!isEmailInAuthData && isPasswordInAuthData && firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && password.length !== 0) {
      setEmailDirty(true)
      setPasswordDirty(false)
      setEmailError("Wrong email")
    } else if (!isEmailInAuthData && !isPasswordInAuthData && firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && password.length !== 0) {
      setEmailDirty(true)
      setPasswordDirty(true)
      setPasswordNameError("Wrong password")
      setEmailNameError("Wrong email")
    }
  }

  return (
    !isHaveAccount ? (
      <div className="account-modal-wrapper" hidden={props.hiddenModal}>
        <div className="account-modal">
          <div className="top-wrapper">
            <h3>CREATE ACCOUNT</h3>
            <div className="close-button" onClick={props.closeModal}></div>
          </div>
          <form className="account-form">
            {(firstNameDirty && firstNameError) && <span className="input-error">{firstNameError}</span>}
            <input className="account-input" value={firstName} name="first-name" placeholder="First Name" type="text" onChange={firstNameHandler} onBlur={e => blurHandler(e)} pattern="^[A-Za-zА-Яа-яЁё0-93._,-]*$" required/>
            {(lastNameDirty && lastNameError) && <span className="input-error">{lastNameError}</span>}
            <input className="account-input" value={lastName} name="last-name" placeholder="Last Name" type="text" onChange={lastNameHandler} onBlur={e => blurHandler(e)} pattern="^[A-Za-zА-Яа-яЁё0-93._,-]*$" required/>
            {(emailDirty && emailError) && <span className="input-error">{emailError}</span>}
            <input className="account-input" value={email} name="email" placeholder="Email" type="email" onChange={emailHandler} onBlur={e => blurHandler(e)} required/>
            {(passwordDirty && passwordError) && <span className="input-error">{passwordError}</span>}
            <input className="account-input" value={password} name="password" placeholder="Password" type="password" onBlur={e => blurHandler(e)} onChange={passwordHandler} minLength="6" required/>
            <input type="checkbox" className="checkbox" id="personalNews" name="news" value="yes"/>
            <label htmlFor="personalNews" className="label-for-checkbox">
              Let's get personal! We'll send you only the good stuff: <br/> Exclusive early access to Sale, new arrivals and promotions. No nasties.
            </label>
            <p className="privacy-policy">By signing up you agree to <a href="#"><u><b>Terms of Service</b></u></a> and <a href="#"><u><b>Privacy Policy</b></u></a></p>
            <button className="account-form-button" type="submit" onClick={checkExistedUser}>SIGN UP</button>
          </form>
          <h4><a href="#" onClick={goToLogin}><u>I HAVE AN ACCOUNT</u></a></h4>
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
            {(emailDirty && emailError) && <span className="input-error">{emailError}</span>}
            <input className="account-input" value={email} name="email" placeholder="Email" type="email" onChange={emailHandler} onBlur={e => blurHandler(e)} required/>
            {(passwordDirty && passwordError) && <span className="input-error">{passwordError}</span>}
            <input className="account-input" value={password} name="password" placeholder="Password" type="password" onChange={passwordHandler} onBlur={e => blurHandler(e)}  minLength="6" required/>
            <input type="checkbox" className="checkbox" id="personalNews" name="news" value="yes"/>
            <label htmlFor="personalNews" className="label-for-checkbox">
              Let's get personal! We'll send you only the good stuff: <br/> Exclusive early access to Sale, new arrivals and promotions. No nasties.
            </label>
            <p className="privacy-policy">By signing up you agree to <a href="#"><u><b>Terms of Service</b></u></a> and <a href="#"><u><b>Privacy Policy</b></u></a></p>
            <button className="account-form-button" type="submit" onClick={checkExistedUser}>SIGN UP</button>
          </form>
        </div>
      </div>
    )
  )
}
