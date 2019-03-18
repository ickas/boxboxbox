import React, { Component } from "react";
// import Moment from "react-moment";

import CalendarWrapper from "../design-system/organisms/CalendarWrapper";
import CalendarItem from "../design-system/molecules/CalendarItem";
import calendar from "../utils/calendar";

class App extends Component {
  state = {
    calendar: calendar
  };

  render() {
    // const race = "2019-03-17T16:10+1100";

    return (
      <CalendarWrapper>
        {/* <Moment date={race} format="DD/MM/YYYY HH:mm" />
        <Moment date={race} format="DD/MM/YYYY HH:mm" add={{ hours: 2 }} />
        <Moment date={race} format="MMM" /> */}

        {Object.keys(this.state.calendar).map(key => (
          <CalendarItem
            key={key}
            index={key}
            details={this.state.calendar[key]}
          />
        ))}
      </CalendarWrapper>
    );
  }
}

export default App;
