import React, { Component } from "react";
import styled from "styled-components";

import Icon from "../atoms/Icons";

const Footer = styled.div`
  background-color: var(--light-grey, #38383f);
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--white, #ffffff);

  a {
    color: var(--white, #ffffff);
    text-decoration: none;
    transition-duration: 0.3s;

    &:hover {
      color: var(--dark-grey, #15151e);
    }
  }

  svg {
    margin-top: 4px;
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
      <Footer>
        <span>
          Made by{" "}
          <a
            href="https://twitter.com/henrikemacedo"
            target="_blank"
            rel="noreferrer"
          >
            @henrikemacedo
          </a>
        </span>
        <a
          href="https://github.com/henriquemacedo/boxboxbox"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="github" />
        </a>
      </Footer>
    );
  }
}
