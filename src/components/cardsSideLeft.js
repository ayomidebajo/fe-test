import React from "react";
import {
  annoucementSVG,
  castleSVG,
  envelopeSVG,
  fingerprintSVG,
  locationSVG,
  noteBookSVG,
  phoneSVG,
} from "./NonComponent/svgs";

const CardsSideLeft = () => {
  return (
    <div className="left-cards--container">
      <div className="card-left--container">
        <ul className="details-list">
          <li className="list-title">
            <span className="icon-list_title">{castleSVG()}</span>
            Division Summary
          </li>
          <li className="list-item_card-left">
            <span className="list-item_icon">{phoneSVG()}</span>
            08012345678
          </li>
          <li className="list-item_card-left">
            <span className="list-item_icon">{envelopeSVG()}</span>
            asbfefr@gmail.com
          </li>
          <li className="list-item_card-left">
            <span className="list-item_icon">{locationSVG()}</span>
            Mojidi, Lagos
          </li>
          <li className="list-item_card-left underline-blue">
            <span className="list-item_icon">{noteBookSVG()}</span>2 Journal
            entries
          </li>
          <li className="list-item_card-left">
            <span className="list-item_icon">{fingerprintSVG()}</span>
            24 fingerprints enrolled
          </li>
        </ul>
      </div>
      <div className="cards-botton_left--container">
        <div className="list-title">
          <span className="icon-list_title">{annoucementSVG()}</span>
          Module History
        </div>
        <div className="flex-items">
          <div className="list-dots">
            <div className="dot"></div>
            <div className="dashed"></div>
            <div className="dot"></div>
            <div className="dashed"></div>
            <div className="dot"></div>
          </div>
          <ul className="list-history">
            <li className="history">
              <p className="text">
                Searched "Journal Entries" on Division module
              </p>
              <span className="bluegrey"></span>
              <p className="text entries bluegrey date">
                22:10 15/09/2020
                <div className="dot-blue"></div>
                Web
              </p>
            </li>
            <li className="history">
              <p className="text">
                Searched "Journal Entries" on Division module
              </p>
              <span className="bluegrey"></span>
              <p className="text entries bluegrey date">
                22:10 15/09/2020
                <div className="dot-blue"></div>
                Web
              </p>
            </li>
            <li className="history">
              <p className="text">
                Searched "Journal Entries" on Division module
              </p>
              <span className="bluegrey"></span>
              <p className="text entries bluegrey date">
                22:10 15/09/2020
                <div className="dot-blue"></div>
                Web
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardsSideLeft;
