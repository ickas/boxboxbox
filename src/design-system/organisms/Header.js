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

  a {
    height: 25px;
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
        <a
          href="webcal://p14-calendars.icloud.com/published/2/Mjc0Njc4NjgxMjc0Njc4NqTqkx9qY_9OsmGMVxlcaHt6vQoBzyQi5mrLAlL3wXA7OPaGI5j2N4E9eyV0SyJoA-mdrF9RjgmdyKQpVapBjwo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="apple" title="Apple Calendar" />
        </a>
        <a
          href="https://calendar.google.com/calendar/ical/henriquemacedo.pt_moivngeftb71qsc6b9qojqaef0%40group.calendar.google.com/public/basic.ics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="google" title="Google Calendar" />
        </a>
      </Header>
    );
  }
}
