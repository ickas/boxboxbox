import React, { Component } from "react";
import styled from "styled-components";

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

  /* &:first-child {
    border-color: #e10600;
  } */
`;

export default class extends Component {
  render() {
    const { active, title, race, quali, fp3, fp2, fp1 } = this.props.details;

    return (
      <CalendarItem active={active}>
        <Title value={title} />
        <DayWrapper>
          <DayItem date={race} duration={2} phase="Race" />
          <DayItem date={quali} duration={1} phase="Qualifying" />
          <DayItem date={fp3} duration={1} phase="Practice 3" />
          <DayItem date={fp2} duration={1.5} phase="Practice 2" />
          <DayItem date={fp1} duration={1.5} phase="Practice 1" />
        </DayWrapper>
      </CalendarItem>
    );
  }
}
