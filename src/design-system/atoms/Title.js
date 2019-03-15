import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
`;

export default class extends Component {
  render() {
    return <Title>{this.props.value}</Title>;
  }
}
