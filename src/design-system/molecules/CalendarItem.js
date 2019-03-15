import React, { Component } from "react";
import styled, { css } from "styled-components";

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
    return <CalendarItem {...this.props}>{this.props.children}</CalendarItem>;
  }
}
