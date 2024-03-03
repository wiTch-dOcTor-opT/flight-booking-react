import React, { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SearchForm from "./SearchForm";
import FlightTable from "./FlightTable";

const FlightSearch = () => {
  const [searchParams, setSearchParams] = useState({
    source: "",
    destination: "",
    travelDate: "",
    returnDate: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    setError(null);
    const requiredFields = ["source", "destination", "travelDate"];
    for (const field of requiredFields) {
      if (!searchParams[field]) {
        setError(`Please enter ${field}.`);
        return;
      }
    }
    const searchQuery = {
      source: searchParams.source,
      destination: searchParams.destination,
      travel_date: searchParams.travelDate,
      return_date: searchParams.returnDate,
    };
    setLoading(true);
    fetch("http://127.0.0.1:5000/search_flights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchQuery),
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        setError("Error fetching data. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <SearchForm
            searchParams={searchParams}
            handleInputChange={handleInputChange}
            handleSearch={handleSearch}
          />
        </Col>
      </Row>

      {loading && (
        <div className="text-center mt-3">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}

      {error && <p className="mt-3 text-danger">{error}</p>}

      {searchResults.departure &&
        searchResults.departure.results.length > 0 && (
          <div style={{ marginTop: "30px" }}>
            <FlightTable
              results={searchResults.departure.results}
              title="Departure Results"
            />
          </div>
        )}

      {searchResults.arrival && searchResults.arrival.results.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <FlightTable
            results={searchResults.arrival.results}
            title="Arrival Results"
          />
        </div>
      )}

      {!loading &&
        searchResults.arrival?.results.length === 0 &&
        searchResults.departure?.results.length === 0 && (
          <p className="mt-3">No Data to Display</p>
        )}
    </Container>
  );
};

export default FlightSearch;
