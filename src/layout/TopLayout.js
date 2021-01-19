import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./TopLayout.scss";

const navList = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "Analytics",
    url: "/analytics",
  },
  {
    name: "Account",
    url: "/account",
  },
];

const TopLayout = ({ children, location: { pathname } }) => {
  const history = useHistory();

  const isLogin = sessionStorage.getItem("isLogin");
  const haveNav = ["/home", "/analytics", "/account"].indexOf(pathname) > -1;

  const handleLogout = () => {
    sessionStorage.removeItem("isLogin");
    history.push("/");
  };

  useEffect(() => {
    if (haveNav && !isLogin) {
      history.push("/login");
    }
    if (!haveNav && isLogin) {
      history.push("/home");
    }
  }, [haveNav, isLogin, history]);
  return (
    <>
      <div className="layout">
        <div className="layout-header">
          <img src={Logo} alt="" className="layout-header-logo" />
          <div className="flex-all" />
          {pathname !== "/login" && (
            <>
              {isLogin ? (
                <div className="layout-header-logout">
                  <div className="layout-header-logout-name">
                    Welcome, Emily
                  </div>
                  <div
                    onClick={handleLogout}
                    className="layout-header-logout-btn"
                  >
                    Logout
                  </div>
                </div>
              ) : (
                <div className="layout-header-login">
                  <Link to="/detail" className="layout-header-login-events">
                    Events
                  </Link>
                  <Link to="/login" className="layout-header-login-btn">
                    Login
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
        {haveNav && (
          <div className="layout-nav">
            {navList.map((item) => (
              <Link
                to={item.url}
                key={item.url}
                className={`layout-nav-item ${
                  item.url === pathname ? "layout-nav-item-active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      {children}
    </>
  );
};
export default TopLayout;
