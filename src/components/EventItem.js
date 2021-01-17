import React from "react";
import { Row, Col } from "react-bootstrap";
import * as moment from "moment";
import "./EventItem.css";

const EventItem = ({ data, updateActive, active, indexNum }) => {
  const isActiveItem = active === indexNum ? "active-item" : "";
  return (
    <Row
      onClick={() => updateActive(indexNum)}
      className={`item-row ${isActiveItem}`}
    >
      <Col xs={3}>
        <div
          className={
            data.details[5].value === "Action Needed" ? "side-yellow" : ""
          }
        ></div>
        <span className="col-title">Date</span>
        <br />
        <span className="col-item">
          {moment(new Date(data.details[0].value)).format("DD/MM/YYYY")}
        </span>
      </Col>
      <Col xs={2}>
        <span className="col-title">Type</span>
        <br />
        <span className="col-item">{data.details[1].value}</span>
      </Col>
      <Col xs={3}>
        <span className="col-title">Vehicle</span>
        <br />
        <span className="col-item">{data.details[2].value}</span>
      </Col>
      <Col xs={2}>
        <span className="col-title">Driver</span>
        <br />
        <span className="col-item">{data.details[3].value}</span>
      </Col>
      <Col xs={2}>
        <span className="col-title">Action</span>
        <br />
        <span className="col-item">{data.details[5].value}</span>
      </Col>
    </Row>
  );
};

export default EventItem;
