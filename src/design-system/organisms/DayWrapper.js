import React, { Component } from "react";
import styled from "styled-components";

const DayWrapper = styled.div`
  margin-top: 20px;
`;

export default class extends Component {
  render() {
    return <DayWrapper>{this.props.children}</DayWrapper>;
  }
}
