import React, { Component } from "react";
// import Timestamp from "react-timestamp";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px;

  > div {
    border: 10px solid #38383f;
    border-left: 0;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px;

    &.active {
      border-color: var(--red, #e10600);
    }

    h1 {
      font-size: 1rem;
      font-weight: 700;
    }

    .schedule {
      .schedule-item {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        .day {
          width: 50px;
          text-align: center;

          span {
            display: block;
            background-color: #38383f;
            height: 20px;
            border-radius: 10px;
            font-size: 12px;
            line-height: 20px;
            text-transform: uppercase;
          }
        }

        .cenas {
          border-left: 1px dashed #38383f;
          margin-left: 20px;
          width: 100%;
          padding-left: 20px;

          span {
            display: block;
            height: 20px;
            font-size: 12px;
            line-height: 20px;
          }
        }
      }
    }
  }
`;

class App extends Component {
  render() {
    return (
      <CalendarWrapper>
        <div className="active">
          <h1>FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2019</h1>
          <div className="schedule">
            <div className="schedule-item">
              <div className="day">
                17 <span>Mar</span>
              </div>
              <div className="cenas">
                Race <span>05:10 - 07:10</span>
              </div>
            </div>
            <div className="schedule-item">
              <div className="day">
                16 <span>Mar</span>
              </div>
              <div className="cenas">
                Qualifying <span>06:00 - 07:00</span>
              </div>
            </div>

            <div className="schedule-item">
              <div className="day">
                16 <span>Mar</span>
              </div>
              <div className="cenas">
                Practice 3 <span>03:00 - 04:00</span>
              </div>
            </div>
            <div className="schedule-item">
              <div className="day">
                15 <span>Mar</span>
              </div>
              <div className="cenas">
                Practice 2 <span>05:00 - 06:30</span>
              </div>
            </div>
            <div className="schedule-item">
              <div className="day">
                15 <span>Mar</span>
              </div>
              <div className="cenas">
                Practice 1 <span>01:00 - 02:30</span>
              </div>
            </div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        {/* <Timestamp time="2015-10-10 10:30:00" format="full" twentyFourHour /> */}
      </CalendarWrapper>
    );
  }
}

export default App;
