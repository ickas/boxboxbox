import React, { Component } from "react";
// import Timestamp from "react-timestamp";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  border: 1px solid red;
  width: 100vw;
  /* min-height: 100vh; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* grid-template-rows: minmax(20vw, 1fr); */

  > div {
    border: 1px solid blue;
    padding: 10%;
    /* box-sizing: border-box; */
    /* min-height: 20vw; */
  }
`;

class App extends Component {
  render() {
    return (
      <CalendarWrapper>
        <div>1</div>
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
