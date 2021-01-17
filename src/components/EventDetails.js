import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  Tab,
  TabContent,
} from "react-bootstrap";
import Detail from "./Detail";
import Location from "./Location";
import Media from "./Media";
import TakeAction from "./TakeAction";

const EventDetails = ({ activeData, activeImage }) => {
  const [activeTab, setActiveTab] = useState("detail");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="titles">Event Details</div>
      <Container className="event-details-tab">
        <Row className="buttons">
          <Button
            disabled={activeData.length === 0}
            variant="secondary"
            className="detail-buttons"
            onClick={() => setShowModal(true)}
          >
            No Action Needed
          </Button>
          <Button
            disabled={activeData.length === 0}
            variant="success"
            className="detail-buttons"
            onClick={() => setShowModal(true)}
          >
            Take Action
          </Button>
          {/* <TakeAction show={showModal} onHide={() => setShowModal(false)} /> */}
          <TakeAction showModal={showModal} onHandleClose={setShowModal} />
        </Row>
        <Row>
          <Col className="tabs-container">
            <Tab.Container
              defaultActiveKey="detail"
              activeKey={activeTab}
              onSelect={(k) => {
                setActiveTab(k);
              }}
            >
              <Row>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link
                      disabled={activeData.length === 0}
                      eventKey="detail"
                    >
                      DETAIL
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      disabled={activeData.length === 0}
                      eventKey="location"
                    >
                      LOCATION
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      disabled={activeData.length === 0}
                      eventKey="media"
                    >
                      MEDIA
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
              <Row>
                <TabContent>
                  <Tab.Pane eventKey="detail">
                    <Detail activeData={activeData}></Detail>
                  </Tab.Pane>
                  <Tab.Pane eventKey="location">
                    <Location locationData={activeData.location}></Location>
                  </Tab.Pane>
                  <Tab.Pane eventKey="media">
                    <Media activeImage={activeImage}></Media>
                  </Tab.Pane>
                </TabContent>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default EventDetails;
