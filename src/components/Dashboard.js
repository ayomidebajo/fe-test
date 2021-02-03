import React from "react";
import CardsSideLeft from "./cardsSideLeft";
import CardsTop from "./CardsTop";
import CardTable from "./CardTable";
import { arrowRightSVG } from "./NonComponent/svgs";

const Dashboard = () => {
  return (
    <div className="dashboard--container">
      <div className="nav-router--container">
        <p className="text light reg">Divisions</p>
        <span className="route-arrow">{arrowRightSVG()}</span>
        <p className="text light reg">Module</p>
      </div>
      <div className="cards-top">
        <CardsTop />
      </div>
      <div className="cards-and_table--container">
        <div className="">
          <CardsSideLeft />
        </div>
        <div className="card-table">
          <CardTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
