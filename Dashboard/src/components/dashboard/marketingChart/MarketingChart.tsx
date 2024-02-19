import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 1],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
export const options = {
  colors: ["red", "green", "yellow"],
};
const MarketingChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="title flex items-center justify-between">
        <h2 className="text-lg font-semibold">Marketing</h2>
        <select name="filter" id="filter" className="select">
          <option value="week">this week</option>
          <option value="month">this month</option>
          <option value="year">this year</option>
        </select>
      </div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"300px"}
        loader={<span>loading..</span>}
      />
    </div>
  );
};

export default MarketingChart;
