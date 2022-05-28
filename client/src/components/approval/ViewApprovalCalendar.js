import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { getReservations } from "../../redux/actions/reservationAction";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function ViewApprovalCalendar() {
  const { reservation } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  //   const events = [
  //     {
  //       tite: "Sample 1",
  //       start: new Date(2022, 6, 3),
  //       end: new Date(2022, 6 , 5),
  //     },
  //   ];
  return (
    <div>
      <Calendar
        localizer={localizer}
        reservation={reservation.timeDuration}
        // events={events}
        // reservation={reservation}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default ViewApprovalCalendar;
