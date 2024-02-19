import {
  CustomerIcon,
  InventoryIcon,
  OrdersIcon,
  SalesIcon,
} from "../../assets/icons";
import {
  MarketingChart,
  RecentOrders,
  StatisticCard,
  SummaryChart,
} from "../../components";

const Dashboard = () => {
  const filterList = [
    { name: "test", value: "test" },
    { name: "test2", value: "test2" },
  ];
  const summaryList = [
    { name: "sales", value: 200 },
    { name: "Volume", value: 10 },
  ];
  return (
    <section className="dashboard">
      <div className="dashboard-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <StatisticCard
            icon={<SalesIcon />}
            name="title"
            filterList={filterList}
            summary={summaryList}
          />
          <StatisticCard
            icon={<CustomerIcon />}
            name="title"
            filterList={[{ name: "test", value: "test" }]}
            summary={[{ name: "sales", value: 200 }]}
          />
          <StatisticCard
            icon={<OrdersIcon />}
            name="title"
            filterList={[{ name: "test", value: "test" }]}
            summary={[{ name: "sales", value: 200 }]}
          />
          <MarketingChart />
          <div className="flex flex-col gap-4">
            <StatisticCard
              icon={<InventoryIcon />}
              name="title"
              filterList={[{ name: "test", value: "test" }]}
              summary={[{ name: "All Products", value: 200 }]}
            />
            <StatisticCard
              icon={<OrdersIcon />}
              name="title"
              filterList={[{ name: "test", value: "test" }]}
              summary={[{ name: "sales", value: 200 }]}
            />
          </div>
          <RecentOrders />
          <SummaryChart />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
