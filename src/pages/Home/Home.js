import { useState } from "react";
import List from "./List";
import { eventList, myList } from "./data";
import "./Home.scss";

const Home = () => {
  const [mine, setMine] = useState(myList);

  const handleAdd = (item) => {
    if (
      mine.findIndex((el) => {
        return el.id === item.id;
      }) === -1
    ) {
      setMine([...mine, item]);
    }
  };

  const handleDelete = (item) => {
    const arr = [];
    mine.forEach((el) => {
      if (el.id !== item.id) {
        arr.push(el);
      }
    });
    setMine(arr);
  };

  return (
    <div className="home">
      <div className="home-header">Discover Events</div>
      <List data={eventList} handleAdd={handleAdd} />
      <div className="home-more">See More</div>
      <div className="home-header">
        My Events
        <div className="flex-all"></div>
        <input
          disabled
          placeholder="Participant"
          type="checkbox"
          className="home-header-checkbox"
        />
      </div>
      <List isMine data={mine} handleDelete={handleDelete} />
      <div className="home-more">See More</div>
    </div>
  );
};
export default Home;
