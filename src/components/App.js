import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import EventList from "./EventsList";
import EventDetails from "./EventDetails";
import unsplash from "../api/unsplash";
import "./App.css";

function App() {
  const [fetchedData, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [active, setActive] = useState("");
  const [activeData, setActiveData] = useState([]);
  const [activeImage, setActiveImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data: result } = await axios.get("/data/data.json");
      setData(result.data);
      setLoadingItems(false);
    };
    const fetchImages = async () => {
      const response = await unsplash.get("/photos?per_page=20");
      setImages(response.data);
    };
    fetchData();
    fetchImages();
  }, [setData, setImages, setLoadingItems]);

  const updateActive = (activeIndex) => {
    setActive(activeIndex);
    setActiveData(fetchedData[activeIndex]);
    setActiveImage(images[activeIndex]);
  };

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={8}>
            {!loadingItems ? (
              <EventList
                fetchedData={fetchedData}
                updateActive={updateActive}
                active={active}
              />
            ) : (
              <Spinner animation="border" className="loading-spinner" />
            )}
          </Col>
          <Col xs={4} className="event-detail-sticky position-sticky">
            <EventDetails activeData={activeData} activeImage={activeImage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
