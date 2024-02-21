"use client";
import Image from "next/image";
import "./SalesBanner.scss";
import { useEffect, useState } from "react";
import { SalesBannerTypes, timerTypes } from "./SalesBanner.types";

const SalesBanner = ({ endDate }: SalesBannerTypes) => {
  const [timer, setTimer] = useState<timerTypes>({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const finishDate: any = new Date(endDate);
      const currentDate: any = new Date();

      if (finishDate <= currentDate) {
        // Finish date has passed, stop the timer
        clearInterval(intervalId);
        setTimer({
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
        });
      } else {
        const remainingDate = finishDate - currentDate;
        const daysRemaining = Math.floor(remainingDate / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (remainingDate % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsRemaining = Math.floor(
          (remainingDate % (1000 * 60)) / 1000
        );

        setTimer({
          days: daysRemaining,
          hours: hoursRemaining,
          min: minutesRemaining,
          sec: secondsRemaining,
        });
      }
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [endDate]);

  return (
    <section className="salesBanner ">
      <div className="container">
        <div className="salesBanner-content">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/banner-sale.png"
              width={500}
              height={500}
              alt="banner-sale"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h1 className="salesBanner-content-subTitle">SALE UPTO 60%</h1>
            <h1 className="salesBanner-content-title">
              Blue classic long sleeves shirt
            </h1>
            <div className="salesBanner-content-timer ">
              <div className="salesBanner-content-timer-time">
                {timer.days}
                <span>Days</span>
              </div>
              <div className="salesBanner-content-timer-time">
                {timer.hours}
                <span>Hours</span>
              </div>
              <div className="salesBanner-content-timer-time">
                {timer.min}
                <span>Minutes</span>
              </div>
              <div className="salesBanner-content-timer-time">
                {timer.sec}
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesBanner;
