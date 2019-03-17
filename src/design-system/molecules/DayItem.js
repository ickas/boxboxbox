import React, { Component } from "react";
import styled from "styled-components";

const DayItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .date {
    width: 50px;
    text-align: center;

    span {
      display: block;
      background-color: #38383f;
      height: 20px;
      border-radius: 10px;
      font-size: 12px;
      line-height: 20px;
      text-transform: uppercase;
    }
  }

  .phase {
    border-left: 1px dashed #38383f;
    margin-left: 20px;
    width: 100%;
    padding-left: 20px;

    span {
      display: block;
      height: 20px;
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

export default class extends Component {
  render() {
    return (
      <DayItem>
        <div className="date">
          {this.props.day} <span>{this.props.month}</span>
        </div>
        <div className="phase">
          {this.props.phase}
          <span>
            {this.props.startTime} - {this.props.endTime}
          </span>
        </div>
      </DayItem>
    );
  }
}
