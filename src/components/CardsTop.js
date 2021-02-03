import React from "react";

const CardsTop = () => {
  return (
    <div className="cards--container">
      <div className="card">
        <div className="inner-card">
          <div className="metric">
            <h1 className="h1-bold">31454</h1>
            <p className="text grey bold">Ongoing metric</p>
          </div>

          <div className="round-circle">
            <div className="info grey bold">i</div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="inner-card">
          <div className="metric">
            <h1 className="h1-bold">2344</h1>
            <p className="text grey bold">Past metric</p>
          </div>

          <div className="round-circle">
            <div className="info grey">i</div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="inner-card">
          <div className="metric">
            <h1 className="h1-bold">14224</h1>
            <p className="text grey bold">Missed metric</p>
          </div>

          <div className="round-circle">
            <div className="info grey">i</div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="inner-card">
          <div className="metric">
            <h1 className="h1-bold">635</h1>
            <p className="text grey bold">Failed metric</p>
          </div>

          <div className="round-circle">
            <div className="info grey">i</div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="inner-card">
          <div className="metric">
            <h1 className="h1-bold">11334</h1>
            <p className="text grey bold">Pending metric</p>
          </div>

          <div className="round-circle">
            <div className="info grey">i</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsTop;
