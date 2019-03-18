import React, { Component } from "react";
import Moment from "react-moment";
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
      background-color: var(--light-grey, #38383f);
      height: 20px;
      border-radius: 10px;
      font-size: 12px;
      line-height: 20px;
      text-transform: uppercase;
    }
  }

  .phase {
    border-left: 1px dashed var(--light-grey, #38383f);
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
          <Moment date={this.props.date} format="DD" />
          <span>
            <Moment date={this.props.date} format="MMM" />
          </span>
        </div>
        <div className="phase">
          {this.props.phase}
          <span>
            <Moment date={this.props.date} format="HH:mm" /> -{" "}
            <Moment
              date={this.props.date}
              format="HH:mm"
              add={{ hours: this.props.duration }}
            />
          </span>
        </div>
      </DayItem>
    );
  }
}
