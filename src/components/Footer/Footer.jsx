import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const RecentPost = [
    { name: "Post1", link: "/post1" },
    { name: "Post2", link: "/Post2" },
    { name: "Post3", link: "/Post3" },
    { name: "Post4", link: "/Post4" },
    { name: "Post5", link: "/Post5" },
  ];
  const ourAddress = [
    { name: "Gazipur, Dhaka, Bangladesh", link: "/" },
    { name: "Md Nayem Hossain", link: "/" },
  ];
  const Pages = [
    { name: "About", link: "/About" },
    { name: "Services", link: "/Services" },
    { name: "Portfolio", link: "/Portfolio" },
    { name: "Leadership", link: "/Leadership" },
    { name: "Careers", link: "/Careers" },
  ];
  const services = [
    { name: "IT Consultancy", link: "/consultancy" },
    { name: "Development", link: "/development" },
    { name: "Cyber Security", link: "/cyber" },
    { name: "Co-Structure", link: "/Co-Structure" },
    { name: "Cloud Service", link: "/cloudService" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5 text-center">
          <FooterCol key={1} menuTitle="Recent Post" menuItems={RecentPost} />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Pages" menuItems={Pages} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
          </FooterCol>
        </div>

        <div className="copyRight text-center">
          <p className="text-gray">
            Copyright {new Date().getFullYear()} All Rights Reserved || Design
            && Build by Team 81
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
