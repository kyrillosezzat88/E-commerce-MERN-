import { StatisticCardTypes } from "./StatisticCard.types";
import "./statisticCard.scss";

const StatisticCard = ({
  name,
  filterList,
  icon,
  summary,
}: StatisticCardTypes) => {
  return (
    <div className="statisticCard">
      <div className="statisticCard-head">
        {icon}
        <select className="select" name={name} id="filter">
          {filterList.map((filter, index) => (
            <option key={index} value={filter.value}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>
      <div className={`statisticCard-bottom grid-cols-${summary.length}`}>
        {summary.map((summary, index) => (
          <div key={index}>
            <h4 className="capitalize mb-2">{summary.name}</h4>
            <span className="text-2xl font-bold">{summary.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticCard;
