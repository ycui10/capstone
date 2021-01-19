import Logo from "../assets/footer_logo.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import "./FooterLayout.scss";

const FooterLayout = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="" className="footer-logo" />
      <div className="flex-all" />
      <img src={Facebook} alt="" />
      <img src={Instagram} alt="" />
      <img src={Twitter} alt="" />
      <div className="flex-all" />
      <div className="footer-email">contact@reachlive.com</div>
    </div>
  );
};
export default FooterLayout;
