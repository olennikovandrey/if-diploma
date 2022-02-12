import React, { useState } from "react";
import SubscribeForm from "./SubscribeForm";
import "./footer.css"

export default function Footer() {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const formVisibleChanger = () => setIsFormVisible(() => !isFormVisible);

  return (
    <footer>
      <SubscribeForm isFormVisible={isFormVisible} formVisibleChanger={formVisibleChanger} />
      <div className="footer-items">
        <ul>
          <li className="footer-item-title">CUSTOMER SERVICE</li>
          <li className="footer-item">CONTACT</li>
          <li className="footer-item">TRACK ORDER</li>
          <li className="footer-item">DELIVERY & RETURNS</li>
          <li className="footer-item">PAYMENT</li>
          <li className="footer-item">MAKE A RETURN</li>
          <li className="footer-item">FAQ</li>
        </ul>
        <ul>
          <li className="footer-item-title">INFO</li>
          <li className="footer-item">GIFT VOUCHERS</li>
          <li className="footer-item">SIZE GUIDE</li>
          <li className="footer-item">CAREERS AT MODNIKKY</li>
          <li className="footer-item">ABOUT US</li>
          <li className="footer-item">LEGAL POLICES</li>
        </ul>
        <ul>
          <li className="footer-item-title">FOLLOW US</li>
          <li className="footer-item facebook"><a href="https://www.facebook.com/">FACEBOOK</a></li>
          <li className="footer-item odnoklassniki"><a href="https://ok.ru/">ODNOKLASSNIKI</a></li>
          <li className="footer-item instagram"><a href="https://www.instagram.com/">NSTAGRAM</a></li>
        </ul>
        <ul>
          <li className="footer-item-title">CONTACT US</li>
          <li className="footer-item"><a href="mailto:hello@modnikky.com">hello@modnikky.com</a></li>
          <li className="footer-item"><a href="tel:+7 910 832 26XX">+7 910 832 26XX</a></li>
          <li className="footer-item">Visit us at Shalalaeva 23,<br/>Bologoe, Russia</li>
        </ul>
      </div>
    </footer>
  )
}
