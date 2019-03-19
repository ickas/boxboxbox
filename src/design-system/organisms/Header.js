import React, { Component } from "react";
import styled from "styled-components";

import Icon from "../atoms/Icons";

const Header = styled.div`
  position: fixed;
  background-color: var(--red, #e10600);
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  > *:not(:last-child) {
    margin-right: 10px;
  }

  span {
    font-weight: 700;
  }

  svg {
    width: auto;
    height: 25px;
    fill: #ffffff;
    transition-duration: 0.3s;
    cursor: pointer;

    &:hover {
      fill: var(--dark-grey, #15151e);
    }
  }
`;

export default class extends Component {
  render() {
    return (
      <Header>
        <span>Calendars:</span>
        <Icon icon="apple" title="Apple Calendar" />
        <Icon icon="google" title="Google Calendar" />
      </Header>
    );
  }
}
