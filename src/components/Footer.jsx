import React from 'react';
import SocialLinksTable from './SocialLinksTable'; // استيراد الجدول بدل ما نعيده
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <SocialLinksTable /> {/* هنا هنعرض اللينكات الجاهزة */}
      
      <div className="made-by">
        By_Ahmed Bakry
      </div>
    </div>
  );
};

export default Footer;