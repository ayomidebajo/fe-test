import React from "react";

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
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
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
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                      fill="#0052CC"
                    />
                  </svg>
                </span>
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
                <p className="entries text-reg green">
                  <span className="arrow ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83317 5.83366L14.1665 14.167"
                        stroke="#3AB65C"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.1665 5.83366V14.167H5.83317"
                        stroke="#3AB65C"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  Low Risk
                </p>
                <div className="dots">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.666702C1.46957 0.666702 0.960859 0.877416 0.585786 1.25249C0.210713 1.62756 0 2.13627 0 2.6667C0 3.19714 0.210713 3.70584 0.585786 4.08092C0.960859 4.45599 1.46957 4.6667 2 4.6667C2.53043 4.6667 3.03914 4.45599 3.41421 4.08092C3.78929 3.70584 4 3.19714 4 2.6667C4 2.13627 3.78929 1.62756 3.41421 1.25249C3.03914 0.877416 2.53043 0.666702 2 0.666702ZM2 6.00004C1.46957 6.00004 0.960859 6.21075 0.585786 6.58582C0.210713 6.96089 0 7.4696 0 8.00004C0 8.53047 0.210713 9.03918 0.585786 9.41425C0.960859 9.78932 1.46957 10 2 10C2.53043 10 3.03914 9.78932 3.41421 9.41425C3.78929 9.03918 4 8.53047 4 8.00004C4 7.4696 3.78929 6.96089 3.41421 6.58582C3.03914 6.21075 2.53043 6.00004 2 6.00004ZM2 11.3334C1.46957 11.3334 0.960859 11.5441 0.585786 11.9192C0.210713 12.2942 0 12.8029 0 13.3334C0 13.8638 0.210713 14.3725 0.585786 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334C2.53043 15.3334 3.03914 15.1227 3.41421 14.7476C3.78929 14.3725 4 13.8638 4 13.3334C4 12.8029 3.78929 12.2942 3.41421 11.9192C3.03914 11.5441 2.53043 11.3334 2 11.3334Z"
                      fill="#C3C3C3"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                      fill="#0052CC"
                    />
                  </svg>
                </span>
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
                <p className="entries text-reg blue">
                  <span className="arrow ">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M9.10771 15.0003H20.8928"
                          stroke="#3C3AB6"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0003 9.10775L20.8928 15.0003L15.0003 20.8929"
                          stroke="#3C3AB6"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.85791 15) rotate(-45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Mid Risk
                </p>
                <div className="dots">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.666702C1.46957 0.666702 0.960859 0.877416 0.585786 1.25249C0.210713 1.62756 0 2.13627 0 2.6667C0 3.19714 0.210713 3.70584 0.585786 4.08092C0.960859 4.45599 1.46957 4.6667 2 4.6667C2.53043 4.6667 3.03914 4.45599 3.41421 4.08092C3.78929 3.70584 4 3.19714 4 2.6667C4 2.13627 3.78929 1.62756 3.41421 1.25249C3.03914 0.877416 2.53043 0.666702 2 0.666702ZM2 6.00004C1.46957 6.00004 0.960859 6.21075 0.585786 6.58582C0.210713 6.96089 0 7.4696 0 8.00004C0 8.53047 0.210713 9.03918 0.585786 9.41425C0.960859 9.78932 1.46957 10 2 10C2.53043 10 3.03914 9.78932 3.41421 9.41425C3.78929 9.03918 4 8.53047 4 8.00004C4 7.4696 3.78929 6.96089 3.41421 6.58582C3.03914 6.21075 2.53043 6.00004 2 6.00004ZM2 11.3334C1.46957 11.3334 0.960859 11.5441 0.585786 11.9192C0.210713 12.2942 0 12.8029 0 13.3334C0 13.8638 0.210713 14.3725 0.585786 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334C2.53043 15.3334 3.03914 15.1227 3.41421 14.7476C3.78929 14.3725 4 13.8638 4 13.3334C4 12.8029 3.78929 12.2942 3.41421 11.9192C3.03914 11.5441 2.53043 11.3334 2 11.3334Z"
                      fill="#C3C3C3"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
                <span>
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                      fill="#0052CC"
                    />
                  </svg>
                </span>
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
                <p className="entries text-reg blue">
                  <span className="arrow ">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M9.10771 15.0003H20.8928"
                          stroke="#3C3AB6"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0003 9.10775L20.8928 15.0003L15.0003 20.8929"
                          stroke="#3C3AB6"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.85791 15) rotate(-45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Mid Risk
                </p>
                <div className="dots">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.666702C1.46957 0.666702 0.960859 0.877416 0.585786 1.25249C0.210713 1.62756 0 2.13627 0 2.6667C0 3.19714 0.210713 3.70584 0.585786 4.08092C0.960859 4.45599 1.46957 4.6667 2 4.6667C2.53043 4.6667 3.03914 4.45599 3.41421 4.08092C3.78929 3.70584 4 3.19714 4 2.6667C4 2.13627 3.78929 1.62756 3.41421 1.25249C3.03914 0.877416 2.53043 0.666702 2 0.666702ZM2 6.00004C1.46957 6.00004 0.960859 6.21075 0.585786 6.58582C0.210713 6.96089 0 7.4696 0 8.00004C0 8.53047 0.210713 9.03918 0.585786 9.41425C0.960859 9.78932 1.46957 10 2 10C2.53043 10 3.03914 9.78932 3.41421 9.41425C3.78929 9.03918 4 8.53047 4 8.00004C4 7.4696 3.78929 6.96089 3.41421 6.58582C3.03914 6.21075 2.53043 6.00004 2 6.00004ZM2 11.3334C1.46957 11.3334 0.960859 11.5441 0.585786 11.9192C0.210713 12.2942 0 12.8029 0 13.3334C0 13.8638 0.210713 14.3725 0.585786 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334C2.53043 15.3334 3.03914 15.1227 3.41421 14.7476C3.78929 14.3725 4 13.8638 4 13.3334C4 12.8029 3.78929 12.2942 3.41421 11.9192C3.03914 11.5441 2.53043 11.3334 2 11.3334Z"
                      fill="#C3C3C3"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
                <span>
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                      fill="#0052CC"
                    />
                  </svg>
                </span>
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
                <p className="entries text-reg red">
                  <span className="arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.94891 13.8921L8.05176 2.10748"
                        stroke="#B63A3A"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.10801 7.94839L8.05176 2.10748L13.8927 8.05124"
                        stroke="#B63A3A"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  High Risk
                </p>
                <div className="dots">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.666702C1.46957 0.666702 0.960859 0.877416 0.585786 1.25249C0.210713 1.62756 0 2.13627 0 2.6667C0 3.19714 0.210713 3.70584 0.585786 4.08092C0.960859 4.45599 1.46957 4.6667 2 4.6667C2.53043 4.6667 3.03914 4.45599 3.41421 4.08092C3.78929 3.70584 4 3.19714 4 2.6667C4 2.13627 3.78929 1.62756 3.41421 1.25249C3.03914 0.877416 2.53043 0.666702 2 0.666702ZM2 6.00004C1.46957 6.00004 0.960859 6.21075 0.585786 6.58582C0.210713 6.96089 0 7.4696 0 8.00004C0 8.53047 0.210713 9.03918 0.585786 9.41425C0.960859 9.78932 1.46957 10 2 10C2.53043 10 3.03914 9.78932 3.41421 9.41425C3.78929 9.03918 4 8.53047 4 8.00004C4 7.4696 3.78929 6.96089 3.41421 6.58582C3.03914 6.21075 2.53043 6.00004 2 6.00004ZM2 11.3334C1.46957 11.3334 0.960859 11.5441 0.585786 11.9192C0.210713 12.2942 0 12.8029 0 13.3334C0 13.8638 0.210713 14.3725 0.585786 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334C2.53043 15.3334 3.03914 15.1227 3.41421 14.7476C3.78929 14.3725 4 13.8638 4 13.3334C4 12.8029 3.78929 12.2942 3.41421 11.9192C3.03914 11.5441 2.53043 11.3334 2 11.3334Z"
                      fill="#C3C3C3"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
                <span>
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                      fill="#0052CC"
                    />
                  </svg>
                </span>
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
                <p className="entries text-reg green">
                  <span className="arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83317 5.83366L14.1665 14.167"
                        stroke="#3AB65C"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.1665 5.83366V14.167H5.83317"
                        stroke="#3AB65C"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  Low Risk
                </p>
                <div className="dots">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.666702C1.46957 0.666702 0.960859 0.877416 0.585786 1.25249C0.210713 1.62756 0 2.13627 0 2.6667C0 3.19714 0.210713 3.70584 0.585786 4.08092C0.960859 4.45599 1.46957 4.6667 2 4.6667C2.53043 4.6667 3.03914 4.45599 3.41421 4.08092C3.78929 3.70584 4 3.19714 4 2.6667C4 2.13627 3.78929 1.62756 3.41421 1.25249C3.03914 0.877416 2.53043 0.666702 2 0.666702ZM2 6.00004C1.46957 6.00004 0.960859 6.21075 0.585786 6.58582C0.210713 6.96089 0 7.4696 0 8.00004C0 8.53047 0.210713 9.03918 0.585786 9.41425C0.960859 9.78932 1.46957 10 2 10C2.53043 10 3.03914 9.78932 3.41421 9.41425C3.78929 9.03918 4 8.53047 4 8.00004C4 7.4696 3.78929 6.96089 3.41421 6.58582C3.03914 6.21075 2.53043 6.00004 2 6.00004ZM2 11.3334C1.46957 11.3334 0.960859 11.5441 0.585786 11.9192C0.210713 12.2942 0 12.8029 0 13.3334C0 13.8638 0.210713 14.3725 0.585786 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334C2.53043 15.3334 3.03914 15.1227 3.41421 14.7476C3.78929 14.3725 4 13.8638 4 13.3334C4 12.8029 3.78929 12.2942 3.41421 11.9192C3.03914 11.5441 2.53043 11.3334 2 11.3334Z"
                      fill="#C3C3C3"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
                <span>
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                      fill="#0052CC"
                    />
                  </svg>
                </span>
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
                <p className="entries text-reg red">
                  <span className="arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.94891 13.8921L8.05176 2.10748"
                        stroke="#B63A3A"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.10801 7.94839L8.05176 2.10748L13.8927 8.05124"
                        stroke="#B63A3A"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  High Risk
                </p>
                <div className="dots">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.666702C1.46957 0.666702 0.960859 0.877416 0.585786 1.25249C0.210713 1.62756 0 2.13627 0 2.6667C0 3.19714 0.210713 3.70584 0.585786 4.08092C0.960859 4.45599 1.46957 4.6667 2 4.6667C2.53043 4.6667 3.03914 4.45599 3.41421 4.08092C3.78929 3.70584 4 3.19714 4 2.6667C4 2.13627 3.78929 1.62756 3.41421 1.25249C3.03914 0.877416 2.53043 0.666702 2 0.666702ZM2 6.00004C1.46957 6.00004 0.960859 6.21075 0.585786 6.58582C0.210713 6.96089 0 7.4696 0 8.00004C0 8.53047 0.210713 9.03918 0.585786 9.41425C0.960859 9.78932 1.46957 10 2 10C2.53043 10 3.03914 9.78932 3.41421 9.41425C3.78929 9.03918 4 8.53047 4 8.00004C4 7.4696 3.78929 6.96089 3.41421 6.58582C3.03914 6.21075 2.53043 6.00004 2 6.00004ZM2 11.3334C1.46957 11.3334 0.960859 11.5441 0.585786 11.9192C0.210713 12.2942 0 12.8029 0 13.3334C0 13.8638 0.210713 14.3725 0.585786 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334C2.53043 15.3334 3.03914 15.1227 3.41421 14.7476C3.78929 14.3725 4 13.8638 4 13.3334C4 12.8029 3.78929 12.2942 3.41421 11.9192C3.03914 11.5441 2.53043 11.3334 2 11.3334Z"
                      fill="#C3C3C3"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
                <span>
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                      fill="#0052CC"
                    />
                  </svg>
                </span>
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
                <p className="entries text-reg blue">
                  <span className="arrow ">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M9.10771 15.0003H20.8928"
                          stroke="#3C3AB6"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0003 9.10775L20.8928 15.0003L15.0003 20.8929"
                          stroke="#3C3AB6"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.85791 15) rotate(-45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Mid Risk
                </p>
                <div className="dots">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.666702C1.46957 0.666702 0.960859 0.877416 0.585786 1.25249C0.210713 1.62756 0 2.13627 0 2.6667C0 3.19714 0.210713 3.70584 0.585786 4.08092C0.960859 4.45599 1.46957 4.6667 2 4.6667C2.53043 4.6667 3.03914 4.45599 3.41421 4.08092C3.78929 3.70584 4 3.19714 4 2.6667C4 2.13627 3.78929 1.62756 3.41421 1.25249C3.03914 0.877416 2.53043 0.666702 2 0.666702ZM2 6.00004C1.46957 6.00004 0.960859 6.21075 0.585786 6.58582C0.210713 6.96089 0 7.4696 0 8.00004C0 8.53047 0.210713 9.03918 0.585786 9.41425C0.960859 9.78932 1.46957 10 2 10C2.53043 10 3.03914 9.78932 3.41421 9.41425C3.78929 9.03918 4 8.53047 4 8.00004C4 7.4696 3.78929 6.96089 3.41421 6.58582C3.03914 6.21075 2.53043 6.00004 2 6.00004ZM2 11.3334C1.46957 11.3334 0.960859 11.5441 0.585786 11.9192C0.210713 12.2942 0 12.8029 0 13.3334C0 13.8638 0.210713 14.3725 0.585786 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334C2.53043 15.3334 3.03914 15.1227 3.41421 14.7476C3.78929 14.3725 4 13.8638 4 13.3334C4 12.8029 3.78929 12.2942 3.41421 11.9192C3.03914 11.5441 2.53043 11.3334 2 11.3334Z"
                      fill="#C3C3C3"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr class="border-grey">
              <td class="icon-table">
                <label class="checkbox">
                  <span class="checkbox__input">
                    <input type="checkbox" name="checkbox" />
                    <span class="checkbox__control">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1.73 12.91l6.37 6.37L22.79 4.59"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
                <span>
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                      fill="#0052CC"
                    />
                  </svg>
                </span>
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
                <p className="text-reg entries green">
                  <span className="arrow ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83317 5.83366L14.1665 14.167"
                        stroke="#3AB65C"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.1665 5.83366V14.167H5.83317"
                        stroke="#3AB65C"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  Low Risk
                </p>
                <div className="dots">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.666702C1.46957 0.666702 0.960859 0.877416 0.585786 1.25249C0.210713 1.62756 0 2.13627 0 2.6667C0 3.19714 0.210713 3.70584 0.585786 4.08092C0.960859 4.45599 1.46957 4.6667 2 4.6667C2.53043 4.6667 3.03914 4.45599 3.41421 4.08092C3.78929 3.70584 4 3.19714 4 2.6667C4 2.13627 3.78929 1.62756 3.41421 1.25249C3.03914 0.877416 2.53043 0.666702 2 0.666702ZM2 6.00004C1.46957 6.00004 0.960859 6.21075 0.585786 6.58582C0.210713 6.96089 0 7.4696 0 8.00004C0 8.53047 0.210713 9.03918 0.585786 9.41425C0.960859 9.78932 1.46957 10 2 10C2.53043 10 3.03914 9.78932 3.41421 9.41425C3.78929 9.03918 4 8.53047 4 8.00004C4 7.4696 3.78929 6.96089 3.41421 6.58582C3.03914 6.21075 2.53043 6.00004 2 6.00004ZM2 11.3334C1.46957 11.3334 0.960859 11.5441 0.585786 11.9192C0.210713 12.2942 0 12.8029 0 13.3334C0 13.8638 0.210713 14.3725 0.585786 14.7476C0.960859 15.1227 1.46957 15.3334 2 15.3334C2.53043 15.3334 3.03914 15.1227 3.41421 14.7476C3.78929 14.3725 4 13.8638 4 13.3334C4 12.8029 3.78929 12.2942 3.41421 11.9192C3.03914 11.5441 2.53043 11.3334 2 11.3334Z"
                      fill="#C3C3C3"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardTable;
