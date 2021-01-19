import { useState } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import "./Analytics.scss";

const lineData = [
  {
    xaxis: "1",
    x: "9",
    value: 300,
  },
  {
    xaxis: "2",
    x: "8",
    value: 400,
  },
  {
    xaxis: "3",
    x: "7",
    value: 350,
  },
  {
    xaxis: "4",
    x: "6",
    value: 500,
  },
  {
    xaxis: "5",
    x: "5",
    value: 490,
  },
  {
    xaxis: "6",
    x: "4",
    value: 600,
  },
  {
    xaxis: "7",
    x: "3",
    value: 700,
  },
  {
    xaxis: "8",
    x: "2",
    value: 900,
  },
  {
    xaxis: "9",
    x: "1",
    value: 1100,
  },
];

const summaryList = [
  {
    name: "Earnings",
    msg: "$1410.00",
  },
  {
    name: "Streaming Hours",
    msg: "07:30:00",
  },
  {
    name: "Followers",
    msg: "2,002",
  },
  {
    name: "View Count",
    msg: "35,003",
  },
];

const insightsList = [
  {
    name: "Most Profitable Earning Component:",
    msg: "Tickets (55% total earnings)",
  },
  {
    name: "Most Profitable Content Type:",
    msg: "Fashion (48% total earnings)",
  },
  {
    name: "Major Follower Age Group:",
    msg: "Below 18 (67% all followers)",
  },
  {
    name: "Most Viewed Content:",
    msg: "Shopping Haul (45% total view count)",
  },
];

const breakdownList = [
  {
    name: "Earnings",
    lineData,
    pieData: [
      { item: "Tickets", count: 65, percent: 0.65 },
      { item: "Donations", count: 20, percent: 0.2 },
      { item: "Ads", count: 15, percent: 0.15 },
    ],
  },
  {
    name: "Streaming Hours",
    lineData,
    pieData: [
      { item: "Lectures", count: 90, percent: 0.9 },
      { item: "Workshops", count: 10, percent: 0.1 },
    ],
  },
  {
    name: "Followers",
    lineData,
    pieData: [
      { item: "19-29", count: 27, percent: 0.27 },
      { item: "30-40", count: 20, percent: 0.2 },
      { item: "Above 40", count: 8, percent: 0.08 },
      { item: "Below 18", count: 65, percent: 0.65 },
    ],
  },
  {
    name: "View Count",
    lineData,
    pieData: [
      { item: "audience didn't finished watching", count: 65, percent: 0.65 },
      { item: "audience finished watching", count: 35, percent: 0.35 },
    ],
  },
];

const Analytics = () => {
  const [pie, setPie] = useState([true, true, true, true]);
  const [line, setLine] = useState([true, true, true, true]);

  const handlePie = (index) => {
    const arr = [...pie];
    arr[index] = !pie[index];
    setPie(arr);
  };

  const handleLine = (index) => {
    const arr = [...line];
    arr[index] = !line[index];
    setLine(arr);
  };

  return (
    <div className="analytics">
      <div className="analytics-header">Summary</div>
      <div className="analytics-summary">
        {summaryList.map((item) => (
          <div key={item.name} className="analytics-summary-item">
            <div className="analytics-summary-item-name">{item.name}</div>
            <div className="analytics-summary-item-msg">{item.msg}</div>
          </div>
        ))}
      </div>
      <div className="analytics-header">Insights</div>
      <div className="analytics-insights">
        {insightsList.map((item) => (
          <div key={item.name} className="analytics-insights-item">
            <div className="analytics-insights-item-name">{item.name}</div>
            <div>{item.msg}</div>
          </div>
        ))}
      </div>
      <div className="analytics-header">Breakdown</div>
      <div className="analytics-breakdown">
        {breakdownList.map((item, index) => (
          <div key={item.name} className="analytics-breakdown-item">
            <div className="analytics-breakdown-item-name">{item.name}</div>
            <div className="analytics-breakdown-item-con">
              <div className="flex-all">
                <select
                  className="analytics-breakdown-item-con-select"
                  onChange={() => handlePie(index)}
                >
                  <option value="">Filter by Start Time</option>
                  <option value="1">This Year</option>
                  <option value="2">This Month</option>
                </select>
                <PieChart turn={pie[index]} data={item.pieData} />
              </div>
              <div className="flex-all">
                <select
                  className="analytics-breakdown-item-con-select"
                  onChange={() => handleLine(index)}
                >
                  <option value="">Filter by Start Time</option>
                  <option value="1">This Year</option>
                  <option value="2">This Month</option>
                </select>
                <LineChart turn={line[index]} data={item.lineData} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Analytics;
