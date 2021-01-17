import React from "react";
import EventItem from "./EventItem";

const EventList = ({ fetchedData, updateActive, active }) => {
  const renderedItems = fetchedData.map((data, index) => {
    return (
      <EventItem
        key={index}
        data={data}
        updateActive={updateActive}
        active={active}
        indexNum={index}
      />
    );
  });
  return (
    <>
      <div className="titles">Events</div>
      {renderedItems}
    </>
  );
};

export default EventList;
