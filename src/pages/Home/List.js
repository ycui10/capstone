import { useEffect, useState } from "react";
import Img0 from "../../assets/home/img0.svg";
import "./List.scss";

const List = ({ isMine, data, handleAdd, handleDelete }) => {
  const [list, setList] = useState([]);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const arr = [];
    data.forEach((item) => {
      if (
        (!type || type === "all" || type === item.type) &&
        (!date || date === "all" || date === item.date) &&
        (!time || time === "all" || time === item.time)
      ) {
        arr.push(item);
      }
    });
    setList(arr);
  }, [data, type, date, time]);

  return (
    <div className="list">
      <div className="list-select">
        <select
          className="list-select-item"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Filter by Type</option>
          <option value="all">All Events</option>
          <option value="food">Food</option>
          <option value="fitness">Fitness</option>
          <option value="technology">Technology</option>
          <option value="fashion">Fashion</option>
          <option value="beauty">Beauty</option>
          <option value="health">Health</option>
        </select>
        <select
          className="list-select-item"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          <option value="">Filter by Date</option>
          <option value="all">This Month</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="week">This Week</option>
          <option value="weekends">Weekends</option>
        </select>
        <select
          className="list-select-item"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Filter by Start Time</option>
          <option value="all">All Day</option>
          <option value="1">Before 7:00 AM</option>
          <option value="2">7:00 AM - 12:00 PM</option>
          <option value="3">12:00 PM - 5:00 PM</option>
          <option value="4">5:00 PM - 10:00 PM</option>
          <option value="5">After 10:00 PM</option>
        </select>
      </div>
      {!isMine && (
        <div className="list-banner">
          <div className="list-banner-title">FEATURED</div>
          <img className="list-banner-img" src={Img0} alt="" />
          <div className="list-banner-name">Autumn Makeup</div>
          <div className="list-banner-msg">
            3:30pm EST, Jan 20th | Jeffrey Nelson | $100
          </div>
        </div>
      )}
      <div className="list-event">
        {list.map((item) => (
          <div key={item.id} className="list-event-item">
            <img className="list-event-item-img" src={item.img} alt="" />
            <div className="list-event-item-con">
              <div className="list-event-item-con-left">
                <div className="list-event-item-con-left-title">
                  {item.title}
                </div>
                <div className="list-event-item-con-left-msg">
                  <div>{item.timeStr}</div>
                  <div>
                    {item.name} | ${item.money}
                  </div>
                </div>
              </div>
              {isMine ? (
                <div
                  onClick={() => handleDelete(item)}
                  className="list-event-item-con-del"
                >
                  Delete
                </div>
              ) : (
                <div
                  onClick={() => handleAdd(item)}
                  className="list-event-item-con-add"
                >
                  Added
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default List;
