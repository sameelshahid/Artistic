import React from "react";
import Styles from "../styles/EventDetails.module.css";

export const EventDetails = ({ country, city, venue, datetime }) => {
  const dt_list = datetime.split("T");

  return (
    <>
        <div className={`${Styles.card} shadow-sm mb-5 bg-white`}>
          <div className={`row no-gutters`}>
            <div className={`${Styles.eventDetail} mb-4`}>
              <h3 className={Styles.EventHeading}>Event Details</h3>
            </div>
            <div className="col">
              <h4>Country</h4>
              <div>{country}</div>
            </div>

            <div className="col">
              <h4>City</h4>
              <div>{city}</div>
            </div>
            <div className="w-100 mb-3"></div>
            <div className="col">
              <h4>Venue</h4>
              <div>{venue}</div>
            </div>
            <div className="col">
              <h4>Date</h4>
              <div>{dt_list[0]}</div>
            </div>
          </div>
        </div>
    </>
  );
};
