import User from "../../assets/account/user.svg";
import Lock from "../../assets/account/lock.png";
import Email from "../../assets/account/email.png";
import Cvv from "../../assets/account/cvv.png";
import Date from "../../assets/account/date.png";
import "./Account.scss";

const lockList = ["Change Password", "Re-enter Password"];
const emailList = ["Change Email", "Re-enter Email"];

const Account = () => {
  return (
    <div className="account">
      <div className="account-header">Profile</div>
      <div className="account-profile">
        <div className="account-profile-left">
          <div className="account-profile-left-name">
            Emily Smith
            <span>New York, NY</span>
          </div>
          <div className="account-profile-left-msg">
            #fashion #shoppinghaul #unboxing
          </div>
          <div className="account-profile-left-about">About</div>
          <div className="account-profile-left-info">Age: 25</div>
          <div className="account-profile-left-info">
            Date of Birth: 1995/07/25
          </div>
          <div className="account-profile-left-info">Gender: Female</div>
        </div>
        <div className="account-profile-right">
          <img className="account-profile-right-img" src={User} alt="" />
          <div className="account-profile-right-msg">Following: 3</div>
          <div className="account-profile-right-msg">Followers: 2,002</div>
        </div>
      </div>
      <div className="account-header">Settings</div>
      <div className="account-settings">
        <div className="account-settings-name">Security</div>
        <div className="account-settings-security">
          <div className="flex-all">
            {lockList.map((item) => (
              <div key={item} className="account-settings-security-item">
                <img
                  className="account-settings-security-item-img"
                  src={Lock}
                  alt=""
                />
                <div className="account-settings-security-item-right">
                  <div className="account-settings-security-item-right-label">
                    {item}
                  </div>
                  <input
                    type="text"
                    className="account-settings-security-item-right-input"
                  />
                </div>
              </div>
            ))}
            <div className="account-settings-security-btn">Confirm</div>
          </div>
          <div className="flex-all">
            {emailList.map((item) => (
              <div key={item} className="account-settings-security-item">
                <img
                  className="account-settings-security-item-img"
                  src={Email}
                  alt=""
                />
                <div className="account-settings-security-item-right">
                  <div className="account-settings-security-item-right-label">
                    {item}
                  </div>
                  <input
                    type="text"
                    className="account-settings-security-item-right-input"
                  />
                </div>
              </div>
            ))}
            <div className="account-settings-security-btn">Confirm</div>
          </div>
        </div>
        <div className="account-settings-name">Payment</div>
        <div className="account-settings-payment">
          <div className="account-settings-payment-label">Cardholder Name*</div>
          <input type="text" className="account-settings-payment-input" />
          <div className="account-settings-payment-label">
            Credit Card Number*
          </div>
          <input type="text" className="account-settings-payment-input" />
          <div className="account-settings-payment-label">
            Expiration Date* <img src={Date} alt="" />
          </div>
          <input type="text" className="account-settings-payment-input" />
          <div className="account-settings-payment-label">
            CVV* <img src={Cvv} alt="" />
          </div>
          <input type="text" className="account-settings-payment-input" />
          <div className="account-settings-payment-label">Billing Address*</div>
          <input type="text" className="account-settings-payment-input" />
          <div className="account-settings-payment-btn">Confirm</div>
        </div>
      </div>
    </div>
  );
};
export default Account;
