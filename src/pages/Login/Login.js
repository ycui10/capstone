import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import Google from "../../assets/google.svg";
import "./Login.scss";

const listData = [
  {
    img: Google,
    msg: "Log in with Google ",
  },
  {
    img: Facebook,
    msg: "Log in with Facebook ",
  },
  {
    img: Instagram,
    msg: "Log in with Instagram ",
  },
  {
    img: Twitter,
    msg: "Log in with Twitter ",
  },
];

const Login = ({ history }) => {
  const handleLogin = () => {
    sessionStorage.setItem("isLogin", 1);
    history.push("/home");
  };

  return (
    <div className="login" style={{ minHeight: window.innerHeight - 229 }}>
      <div className="login-title">Log in to Reach.Live</div>
      <div className="login-contairner">
        <div className="login-contairner-left">
          <div className="login-contairner-left-label">
            Email/Phone/Username
          </div>
          <input
            className="login-contairner-left-input"
            type="text"
            defaultValue="emily.smith@gmail.com"
          />
          <div className="login-contairner-left-label">Password</div>
          <input
            className="login-contairner-left-input"
            type="password"
            defaultValue="123456"
          />
          <div onClick={handleLogin} className="login-contairner-left-btn">
            Login
          </div>
          <div className="login-contairner-left-text">
            Don’t have an account?
            <span className="login-contairner-left-text-bold">Sign up ></span>
          </div>
          <div className="login-contairner-left-text">
            Forgot your password?
            <span className="login-contairner-left-text-bold">Retrieve ></span>
          </div>
        </div>
        <div className="login-contairner-right">
          {listData.map((item) => (
            <div key={item.msg} className="login-contairner-right-item">
              <img
                className="login-contairner-right-item-img"
                src={item.img}
                alt=""
              />
              <div className="login-contairner-right-item-msg">{item.msg}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Login;
