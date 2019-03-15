import React, { Component } from "react";

import CalendarWrapper from "../design-system/organisms/CalendarWrapper";
import CalendarItem from "../design-system/molecules/CalendarItem";
import calendar from "../utils/calendar";

class App extends Component {
  state = {
    calendar: calendar
  };

  render() {
    return (
      <CalendarWrapper>
        {Object.keys(this.state.calendar).map(key => (
          <CalendarItem
            // active
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
