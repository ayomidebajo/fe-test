import React from "react";
import {
  arrowDownLeftSVG,
  arrowMiddleLeftSVG,
  arrowUpSVG,
  blueCircleSVG,
  checkBox,
  dotSVG,
} from "./NonComponent/svgs";

const CardTable = () => {
  return (
    <div className="table--container">
      <div class="table-div">
        <table class="bordered__table">
          <thead class="th">
            <tr>
              <th className="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">{checkBox()}</span>
                  </span>
                </label>
              </th>
              <th className="table-cell-head">Name</th>
              <th className="table-cell-head">Location</th>
              <th className="table-cell-head">Status</th>
              <th className="table-cell-head">Entries</th>
              <th className="table-cell-head">Risk profile</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">{checkBox()}</span>
                  </span>
                </label>
                <span>{blueCircleSVG()}</span>
              </td>

              <td class="table-cell text-reg capitalize md-bold">
                courtney henry
              </td>
              <td class="table-cell">
                <p className="state md-bold">Lagos state</p>
                <span className="grey small-text">775 Rolling Green Rd</span>
              </td>
              <td class="table-cell">
                <div className="highlight-purple text-reg">No Issues</div>
              </td>
              <td class="table-cell">
                <p className="entries">
                  <div className="dot-small"></div> 19 Unique Entries
                </p>
                <span className="grey small-text">Homogenous</span>
              </td>
              <td class="table-cell last-col">
                <p className="entries text-reg green risk">
                  <span className="arrow ">{arrowDownLeftSVG()}</span>
                  Low Risk
                </p>
                <div className="dots">{dotSVG()}</div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">{checkBox()}</span>
                  </span>
                </label>
                <span>{blueCircleSVG()}</span>
              </td>

              <td class="table-cell text-reg capitalize md-bold ">
                darrel steward
              </td>
              <td class="table-cell">
                <p className="state md-bold ">Lagos state</p>
                <span className="grey small-text">7529 E. Pecan St.</span>
              </td>
              <td class="table-cell">
                <div className="highlight-orange text-reg">2 Issues found</div>
              </td>
              <td class="table-cell">
                <p className="entries">
                  <div className="dot-small"></div> 10 Unique Entries
                </p>
                <span className="grey small-text">Heterogenous</span>
              </td>
              <td class="table-cell last-col">
                <p className="entries text-reg blue risk">
                  <span className="arrow anormal">{arrowMiddleLeftSVG()}</span>
                  Mid Risk
                </p>
                <div className="dots">{dotSVG()}</div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">{checkBox()}</span>
                  </span>
                </label>
                <span> {blueCircleSVG()}</span>
              </td>

              <td class="table-cell text-reg capitalize md-bold">
                Cody Fisher
              </td>
              <td class="table-cell">
                <p className="state md-bold ">Lagos state</p>
                <span className="grey small-text">3605 Parker Rd.</span>
              </td>
              <td class="table-cell">
                <div className="highlight-purple text-reg">No Issues</div>
              </td>
              <td class="table-cell">
                <p className="entries">
                  <div className="dot-small"></div> 8 Unique Entries
                </p>
                <span className="grey small-text">Homogenous</span>
              </td>
              <td class="table-cell last-col">
                <p className="entries text-reg blue risk">
                  <span className="arrow anormal">{arrowMiddleLeftSVG()}</span>
                  Mid Risk
                </p>
                <div className="dots">{dotSVG()}</div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">{checkBox()}</span>
                  </span>
                </label>
                <span> {blueCircleSVG()}</span>
              </td>

              <td class="table-cell text-reg capitalize md-bold ">
                Bessie Cooper
              </td>
              <td class="table-cell">
                <p className="state md-bold ">Lagos state</p>
                <span className="grey small-text">775 Rolling Green Rd</span>
              </td>
              <td class="table-cell">
                <div className="highlight-orange text-reg">1 Issue found</div>
              </td>
              <td class="table-cell">
                <p className="entries">
                  <div className="dot-small"></div> 12 Unique Entries
                </p>
                <span className="grey small-text">Heterogenous</span>
              </td>
              <td class="table-cell last-col">
                <p className="entries text-reg red risk">
                  <span className="arrow">{arrowUpSVG()}</span>
                  High Risk
                </p>
                <div className="dots">{dotSVG()}</div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">{checkBox()}</span>
                  </span>
                </label>
                <span> {blueCircleSVG()}</span>
              </td>

              <td class="table-cell text-reg capitalize md-bold ">
                Annette Black
              </td>
              <td class="table-cell">
                <p className="state md-bold ">Lagos state</p>
                <span className="grey small-text">8080 Railroad St.</span>
              </td>
              <td class="table-cell">
                <div className="highlight-purple text-reg">No Issues</div>
              </td>
              <td class="table-cell">
                <p className="entries">
                  <div className="dot-small"></div> 13 Unique Entries
                </p>
                <span className="grey small-text">Heterogenous</span>
              </td>
              <td class="table-cell last-col">
                <p className="entries text-reg green risk">
                  <span className="arrow">{arrowDownLeftSVG()}</span>
                  Low Risk
                </p>
                <div className="dots">{dotSVG()}</div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">{checkBox()}</span>
                  </span>
                </label>
                <span> {blueCircleSVG()}</span>
              </td>

              <td class="table-cell text-reg capitalize md-bold ">
                Jenny Wilson
              </td>
              <td class="table-cell">
                <p className="state md-bold ">Lagos state</p>
                <span className="grey small-text">8080 Railroad St.</span>
              </td>
              <td class="table-cell">
                <div className="highlight-orange text-reg">5 Issues found</div>
              </td>
              <td class="table-cell">
                <p className="entries">
                  <div className="dot-small"></div> 18 Unique Entries
                </p>
                <span className="grey small-text">Homogenous</span>
              </td>
              <td class="table-cell last-col">
                <p className="entries text-reg red risk">
                  <span className="arrow">{arrowUpSVG()}</span>
                  High Risk
                </p>
                <div className="dots">{dotSVG()}</div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">{checkBox()}</span>
                  </span>
                </label>
                <span> {blueCircleSVG()}</span>
              </td>

              <td class="table-cell text-reg capitalize md-bold ">
                Darlene Robertson
              </td>
              <td class="table-cell">
                <p className="state md-bold ">Lagos state</p>
                <span className="grey small-text">3890 Poplar Dr.</span>
              </td>
              <td class="table-cell">
                <div className="highlight-orange text-reg">2 Issues found</div>
              </td>
              <td class="table-cell">
                <p className="entries">
                  <div className="dot-small">*</div> 6 Unique Entries
                </p>
                <span className="grey small-text">Homogenous</span>
              </td>
              <td class="table-cell last-col">
                <p className="entries text-reg blue risk">
                  <span className="arrow anormal">{arrowMiddleLeftSVG()}</span>
                  Mid Risk
                </p>
                <div className="dots">{dotSVG()}</div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">{checkBox()}</span>
                  </span>
                </label>
                <span> {blueCircleSVG()}</span>
              </td>

              <td class="table-cell text-reg capitalize md-bold ">
                Ralph Edwards
              </td>
              <td class="table-cell">
                <p className="state md-bold ">Lagos state</p>
                <span className="grey small-text">8558 Green Rd.</span>
              </td>
              <td class="table-cell">
                <div className="highlight-purple text-reg">No Issues</div>
              </td>
              <td class="table-cell">
                <p className="entries">
                  <div className="dot-small">*</div> 14 Unique Entries
                </p>
                <span className="grey small-text">Homogenous</span>
              </td>
              <td class="table-cell last-col ">
                <p className="text-reg entries green risk">
                  <span className="arrow ">{arrowDownLeftSVG()}</span>
                  Low Risk
                </p>
                <div className="dots">{dotSVG()}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardTable;
