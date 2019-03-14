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
    /* background-color: var(--dark-grey, #15151e); */
    border: 10px solid #38383f;
    border-left: 0;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    /* border-width: 0 15px;
    border-style: solid;
    border-color: var(--red, #e10600);
    border-radius: 25px; */
    padding: 20px;

    &.active {
      border-color: var(--red, #e10600);
    }

    h1 {
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <CalendarWrapper>
        <div className="active">
          <h1>FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2019</h1>
          <p>17 Mar / 05:10 - 07:10 / Race</p>
          <p>16 Mar / 06:00 - 07:00 / Qualifying</p>
          <p>16 Mar / 03:00 - 04:00 / Practice 3</p>
          <p>15 Mar / 05:00 - 06:30 / Practice 2</p>
          <p>15 Mar / 01:00 - 02:30 / Practice 1</p>
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
