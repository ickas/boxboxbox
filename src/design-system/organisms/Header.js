import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  background-color: #e10600;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class extends Component {
  render() {
    return <Header>{this.props.children}</Header>;
  }
}
