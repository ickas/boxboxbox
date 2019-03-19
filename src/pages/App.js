import React, { Component } from "react";

import Header from "../design-system/organisms/Header";
import CalendarLink from "../design-system/atoms/CalendarLink";
import CalendarWrapper from "../design-system/organisms/CalendarWrapper";
import CalendarItem from "../design-system/molecules/CalendarItem";
import Footer from "../design-system/organisms/Footer";
import calendar from "../utils/calendar";

class App extends Component {
  state = {
    calendar: calendar
  };

  render() {
    return (
      <>
        <Header />
        <CalendarWrapper>
          {Object.keys(this.state.calendar).map(key => (
            <CalendarItem
              key={key}
              index={key}
              details={this.state.calendar[key]}
            />
          ))}
        </CalendarWrapper>
        <Footer />
      </>
    );
  }
}

export default App;
