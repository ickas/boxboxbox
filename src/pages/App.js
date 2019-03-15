import React, { Component } from "react";
// import Timestamp from "react-timestamp";

import CalendarWrapper from "../design-system/organisms/CalendarWrapper";
import CalendarItem from "../design-system/molecules/CalendarItem";
import Title from "../design-system/atoms/Title";
import DayWrapper from "../design-system/organisms/DayWrapper";
import DayItem from "../design-system/molecules/DayItem";

class App extends Component {
  render() {
    return (
      <CalendarWrapper>
        <CalendarItem active>
          <Title value="FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2019" />
          <DayWrapper>
            <DayItem
              day={17}
              month="mar"
              phase="Race"
              startTime="05:10"
              endTime="07:10"
            />
            <DayItem
              day={16}
              month="mar"
              phase="Qualifying"
              startTime="06:00"
              endTime="07:00"
            />
            <DayItem
              day={16}
              month="mar"
              phase="Practice 3"
              startTime="03:00"
              endTime="04:00"
            />
            <DayItem
              day={15}
              month="mar"
              phase="Practice 2"
              startTime="05:00"
              endTime="06:30"
            />
            <DayItem
              day={15}
              month="mar"
              phase="Practice 1"
              startTime="01:00"
              endTime="02:30"
            />
          </DayWrapper>
        </CalendarItem>
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
