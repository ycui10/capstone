import { Link } from "react-router-dom";
import Discover from "../../assets/event/discover.svg";
import Host from "../../assets/event/host.svg";
import Monetize from "../../assets/event/monetize.svg";
import Live from "../../assets/event/live.svg";
import "./Event.scss";

const listData = [
  {
    img: Discover,
    title: "Discover Events",
    msg:
      "From fitness, technology, food to fashion, many more events await you from top-rated creators around the world.",
    haveBtn: true,
    btn: "See More",
    btnStyle: {
      background: "#EECC88",
      color: "#6B6B8C",
    },
  },
  {
    img: Host,
    title: "Host Events",
    msg:
      "Bring your commutiy together by hosting live events of any category, at any time, and for any price of your choice. ",
    haveBtn: true,
    haveBg: true,
    btn: "Host Event",
    btnStyle: {
      color: "#EECC88",
      background: "#6B6B8C",
    },
  },
  {
    img: Monetize,
    title: "Monetize Events",
    msg:
      "Profit from your events through customized ticket prices and attendee  donations",
  },
  {
    img: Live,
    title: "Live Interactions",
    haveBg: true,
    msg:
      "Chat, poll, react during and post anytime during live events to connect with attendees around the world",
  },
];

const Event = () => {
  return (
    <div className="event">
      <div className="event-banner">
        <div className="event-banner-white">
          <div className="event-banner-white-text">
            Your place to go live, talk, present, create & host
          </div>
        </div>
      </div>
      <div className="event-list">
        {listData.map((item) => (
          <div
            key={item.msg}
            className={`event-list-item ${item.haveBg ? "event-list-bg" : ""}`}
          >
            {!item.haveBg && (
              <img src={item.img} alt="" className="event-list-item-img" />
            )}
            <div className="event-list-item-contairner">
              <div className="event-list-item-contairner-title">
                {item.title}
              </div>
              <div className="event-list-item-contairner-msg">{item.msg}</div>
              {item.haveBtn && (
                <Link
                  style={item.btnStyle}
                  className="event-list-item-contairner-btn"
                  to="/detail"
                >
                  {item.btn}
                </Link>
              )}
            </div>
            {item.haveBg && (
              <img src={item.img} alt="" className="event-list-item-img" />
            )}
          </div>
        ))}
      </div>
      <div className="event-start">
        <Link to="/login" className="event-start-btn">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};
export default Event;
