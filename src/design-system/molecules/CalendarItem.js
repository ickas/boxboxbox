import React, { Component } from "react";
import styled, { css } from "styled-components";

import Title from "../atoms/Title";
import DayWrapper from "../organisms/DayWrapper";
import DayItem from "../molecules/DayItem";

const CalendarItem = styled.div`
  border: 10px solid;
  border-color: ${props => (props.active ? "#e10600" : "#38383f")};
  border-left: 0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 20px;
`;

export default class extends Component {
  render() {
    const {
      title,
      raceDay,
      raceMonth,
      raceStart,
      raceEnd,
      qualiDay,
      qualiMonth,
      qualiStart,
      qualiEnd,
      fp3Day,
      fp3Month,
      fp3Start,
      fp3End,
      fp2Day,
      fp2Month,
      fp2Start,
      fp2End,
      fp1Day,
      fp1Month,
      fp1Start,
      fp1End
    } = this.props.details;

    return (
      <CalendarItem {...this.props}>
        <Title value={title} />
        <DayWrapper>
          <DayItem
            day={raceDay}
            month={raceMonth}
            phase="Race"
            startTime={raceStart}
            endTime={raceEnd}
          />
          <DayItem
            day={qualiDay}
            month={qualiMonth}
            phase="Qualifying"
            startTime={qualiStart}
            endTime={qualiEnd}
          />
          <DayItem
            day={fp3Day}
            month={fp3Month}
            phase="Practice 3"
            startTime={fp3Start}
            endTime={fp3End}
          />
          <DayItem
            day={fp2Day}
            month={fp2Month}
            phase="Practice 2"
            startTime={fp2Start}
            endTime={fp2End}
          />
          <DayItem
            day={fp1Day}
            month={fp1Month}
            phase="Practice 1"
            startTime={fp1Start}
            endTime={fp1End}
          />
        </DayWrapper>
      </CalendarItem>
    );
  }
}
