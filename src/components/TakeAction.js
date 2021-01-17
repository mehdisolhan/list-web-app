import React, { useState } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Tab,
  Nav,
  TabContent,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const TakeAction = ({ showModal, onHandleClose }) => {
  const [activeTab, setActiveTab] = useState("selectAction");
  const [selectedChoice, setSelectedChoice] = useState("");

  const modalHide = () => {
    setActiveTab("selectAction");
    setSelectedChoice("");
    onHandleClose(false);
  };
  const onTakeAction = () => {
    console.log("take action");
  };

  return (
    <Modal
      show={showModal}
      onHide={modalHide}
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton />
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col className="tabs-container">
              <Tab.Container
                defaultActiveKey="selectAction"
                activeKey={activeTab}
                onSelect={(k) => {
                  setActiveTab(k);
                }}
              >
                <Row className="d-flex justify-content-center">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link
                        disabled={activeTab === "takeAction"}
                        eventKey="selectAction"
                      >
                        SELECT ACTION
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        disabled={activeTab === "selectAction"}
                        eventKey="takeAction"
                      >
                        TAKE ACTION
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Row>
                <Row>
                  <Col xs={12}>
                    <TabContent>
                      <Tab.Pane eventKey="selectAction">
                        <Container>
                          <Row
                            className={`action-choices ${
                              selectedChoice === 1
                                ? "action-choices-active"
                                : ""
                            }`}
                            onClick={() => setSelectedChoice(1)}
                          >
                            <div className="m-3">
                              <strong>Mark As Resolved</strong>
                              <p>
                                Mark this event as resolved and enter the
                                details of the resolution.
                              </p>
                            </div>
                          </Row>
                          <Row
                            className={`action-choices ${
                              selectedChoice === 2
                                ? "action-choices-active"
                                : ""
                            }`}
                            onClick={() => setSelectedChoice(2)}
                          >
                            <div className="m-3">
                              <strong>Change Asset</strong>
                              <p>Change the asset with another one. </p>
                            </div>
                          </Row>
                          <Row className="d-flex justify-content-center mt-4 mb-1">
                            <Button
                              onClick={() => setActiveTab("takeAction")}
                              variant="success"
                            >
                              NEXT
                            </Button>
                          </Row>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="takeAction">
                        <Container>
                          {selectedChoice === 1 ? (
                            <Row className="mark-resolve">
                              <div className="m-3">
                                <strong>Mark As Resolved</strong>
                                <p>
                                  Press the "take action" button to mark this
                                  event as resolved.
                                </p>
                              </div>
                            </Row>
                          ) : (
                            <Row className="change-asset">
                              <div className="m-3">
                                <strong>Change Asset</strong>
                                <p>
                                  Press the "take action" button to change
                                  assets after filling in the required fields.
                                </p>
                                <label htmlFor="url">URL</label>
                                <InputGroup className="mb-3">
                                  <FormControl
                                    id="url"
                                    aria-describedby="basic-addon3"
                                  />
                                </InputGroup>
                              </div>
                            </Row>
                          )}
                          <Row className="d-flex justify-content-center mt-4 mb-1">
                            <Button
                              onClick={() => setActiveTab("selectAction")}
                              variant="dark"
                            >
                              BACK
                            </Button>
                            <Button
                              className="ml-3"
                              onClick={() => onTakeAction()}
                              variant="success"
                            >
                              TAKE ACTION
                            </Button>
                          </Row>
                        </Container>
                      </Tab.Pane>
                    </TabContent>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default TakeAction;
