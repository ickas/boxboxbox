import React, { Component } from "react";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 90px 20px 20px 20px;
`;

export default class extends Component {
  render() {
    return <CalendarWrapper>{this.props.children}</CalendarWrapper>;
  }
}
