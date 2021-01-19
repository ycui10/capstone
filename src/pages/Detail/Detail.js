import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fashion from "../../assets/detail/fashion.svg";
import Food from "../../assets/detail/food.svg";
import Fitness from "../../assets/detail/fitness.svg";
import Technology from "../../assets/detail/technology.svg";
import Health from "../../assets/detail/health.svg";
import Beauty from "../../assets/detail/beauty.svg";
import User1 from "../../assets/detail/user1.svg";
import User2 from "../../assets/detail/user2.svg";
import User3 from "../../assets/detail/user3.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Detail.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  // autoplaySpeed: 1000,
  // autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const listData = [
  {
    name: "Food",
    list: [
      {
        img: Food,
        title: "Today 10pm ET",
        msg: "10 Quorantine Secret Recipes",
        price: 10,
      },
      {
        img: Fitness,
        title: "Today 6pm ET",
        msg: "Yoga with Adriene Moon Practise",
        price: 20,
      },
      {
        img: Fashion,
        title: "Today 1pm ET",
        msg: "Fall 2020 Fashion Show Recap",
        price: 30,
      },
    ],
  },
  {
    name: "Fitness",
    list: [
      {
        img: Fitness,
        title: "Today 10pm ET",
        msg: "10 Quorantine Secret Recipes",
        price: 10,
      },
      {
        img: Food,
        title: "Today 6pm ET",
        msg: "Yoga with Adriene Moon Practise",
        price: 20,
      },
      {
        img: Fashion,
        title: "Today 1pm ET",
        msg: "Fall 2020 Fashion Show Recap",
        price: 30,
      },
    ],
  },
  {
    name: "Technology",
    list: [
      {
        img: Technology,
        title: "Today 10pm ET",
        msg: "10 Quorantine Secret Recipes",
        price: 10,
      },
      {
        img: Fitness,
        title: "Today 6pm ET",
        msg: "Yoga with Adriene Moon Practise",
        price: 20,
      },
      {
        img: Fashion,
        title: "Today 1pm ET",
        msg: "Fall 2020 Fashion Show Recap",
        price: 30,
      },
    ],
  },
  {
    name: "Fashion",
    list: [
      {
        img: Fashion,
        title: "Today 10pm ET",
        msg: "10 Quorantine Secret Recipes",
        price: 10,
      },
      {
        img: Fitness,
        title: "Today 6pm ET",
        msg: "Yoga with Adriene Moon Practise",
        price: 20,
      },
      {
        img: Food,
        title: "Today 1pm ET",
        msg: "Fall 2020 Fashion Show Recap",
        price: 30,
      },
    ],
  },
  {
    name: "Beauty",
    list: [
      {
        img: Beauty,
        title: "Today 10pm ET",
        msg: "10 Quorantine Secret Recipes",
        price: 10,
      },
      {
        img: Fitness,
        title: "Today 6pm ET",
        msg: "Yoga with Adriene Moon Practise",
        price: 20,
      },
      {
        img: Fashion,
        title: "Today 1pm ET",
        msg: "Fall 2020 Fashion Show Recap",
        price: 30,
      },
    ],
  },
  {
    name: "Health",
    list: [
      {
        img: Health,
        title: "Today 10pm ET",
        msg: "10 Quorantine Secret Recipes",
        price: 10,
      },
      {
        img: Fitness,
        title: "Today 6pm ET",
        msg: "Yoga with Adriene Moon Practise",
        price: 20,
      },
      {
        img: Fashion,
        title: "Today 1pm ET",
        msg: "Fall 2020 Fashion Show Recap",
        price: 30,
      },
    ],
  },
];

const Detail = () => {
  return (
    <div className="detail">
      <div className="detail-title">Explore Online Events</div>
      {listData.map((item) => (
        <div key={item.name} className="detail-item">
          <div className="detail-item-title">{item.name}</div>
          <Slider {...settings}>
            {item.list.map((el) => (
              <div key={el.title} className="detail-item-contairner">
                <div className="detail-item-contairner-price">${el.price}</div>
                <img
                  className="detail-item-contairner-img"
                  src={el.img}
                  alt=""
                />
                <div className="detail-item-contairner-right">
                  <div className="detail-item-contairner-right-title">
                    {el.title}
                  </div>
                  <div className="detail-item-contairner-right-msg">
                    {el.msg}
                  </div>
                  <div className="detail-item-contairner-right-speakers">
                    Speakers
                  </div>
                  <div className="detail-item-contairner-right-user">
                    <img src={User1} alt="" />
                    <img src={User2} alt="" />
                    <img src={User3} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
      <div className="detail-start">
        <Link to="/login" className="event-start-btn">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};
export default Detail;
