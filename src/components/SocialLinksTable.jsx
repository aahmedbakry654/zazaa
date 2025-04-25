import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import './SocialLinksTable.css';

const SocialLinksTable = () => {
  return (
    <div className="social-table">
      <a href="https://www.facebook.com/share/16TjAj7jNL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://www.instagram.com/zaza_photography1?igsh=MW1uaHFuN3lodXo0Zg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://www.tiktok.com/@zazaphotography?_t=ZS-8vm7zqDi19o&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      <a href="https://t.me/+201029013265" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
      <a href="https://wa.me/201029013265" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
    </div>
  );
};

export default SocialLinksTable;