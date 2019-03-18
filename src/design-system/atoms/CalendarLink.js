import React, { Component } from "react";
import styled from "styled-components";

const CalendarLink = styled.a`
  border: 1px solid var(--white, #ffffff);
  border-radius: 6px;
  width: 160px;
  padding: 6px 20px;
  text-align: center;
  color: var(--white, #ffffff);
  text-decoration: none;
  transition-duration: 0.3s;

  &:hover {
    border-color: var(--dark-grey, #15151e);
    background-color: var(--dark-grey, #15151e);
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default class extends Component {
  render() {
    return (
      <CalendarLink href={this.props.link} target="_blank">
        {this.props.name}
      </CalendarLink>
    );
  }
}
