import {
  Blog,
  Categories,
  Gallery,
  Header,
  ProductsTabs,
  SalesBanner,
  Subscription,
} from "@/components";
import dotenv from "dotenv";
dotenv.config();
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Categories />
      <ProductsTabs />
      <SalesBanner endDate="2024-12-06T18:18:33.767+00:00" />
      <Blog />
      <Gallery />
      <Subscription />
    </main>
  );
}
