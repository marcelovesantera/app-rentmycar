import React, { useContext } from "react";
import { Date } from "./styles";
// import "react-dates/lib/css/_datepicker.css";
// Resolver(HASSAN)
import { DashboardContext } from "../../../context/DashboardContext";

const DateSelect = () => {
  const {
    currentDateFrom,
    setCurrentDateFrom,
    currentDateTo,
    setCurrentDateTo,
  } = useContext(DashboardContext);
  return (
    <Date>
      <div className="dates">
        <p className="texto-de">De:</p>
        <input
          className="input-date"
          type="date"
          name="date"
          id=""
          required
          value={currentDateFrom}
          onChange={(event) => setCurrentDateFrom(event.target.value)}
        />
        <p className="texto-ate">Até:</p>
        <input
          className="input-date"
          type="date"
          name="date"
          id=""
          required
          value={currentDateTo}
          onChange={(event) => setCurrentDateTo(event.target.value)}
        />
      </div>
    </Date>
  );
};
export default DateSelect;
