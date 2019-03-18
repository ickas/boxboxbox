import React, { Component } from "react";

import Header from "../design-system/organisms/Header";
import CalendarLink from "../design-system/atoms/CalendarLink";
import CalendarWrapper from "../design-system/organisms/CalendarWrapper";
import CalendarItem from "../design-system/molecules/CalendarItem";
import calendar from "../utils/calendar";

class App extends Component {
  state = {
    calendar: calendar
  };

  render() {
    return (
      <>
        <Header>
          <CalendarLink
            name="Apple Calendar"
            link="webcal://p14-calendars.icloud.com/published/2/AAAAAAAAAAAAAAAAAAAAABzHiddr5qqJIbjWfXdCmzoLag3e7jWm-NB4wLP4W5E1vEr4fJYo5VQq68K8zxQMEgBhNc3qTqFdEOEYSluylBo"
          />
          <CalendarLink
            name="Google"
            link="https://calendar.google.com/calendar?cid=aGVucmlxdWVtYWNlZG8ucHRfbW9pdm5nZWZ0YjcxcXNjNmI5cW9qcWFlZjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
          />
        </Header>
        <CalendarWrapper>
          {Object.keys(this.state.calendar).map(key => (
            <CalendarItem
              key={key}
              index={key}
              details={this.state.calendar[key]}
            />
          ))}
        </CalendarWrapper>
      </>
    );
  }
}

export default App;
