import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchForm = ({ searchParams, handleInputChange, handleSearch }) => (
  <Form className="d-flex">
    <Form.Group
      controlId="source"
      className="mr-2 flex-grow-1"
      style={{ marginLeft: "10px" }}
    >
      <Form.Label>Source City</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter source city"
        name="source"
        value={searchParams.source}
        onChange={handleInputChange}
        required
      />
    </Form.Group>

    <Form.Group
      controlId="destination"
      className="mr-2 flex-grow-1"
      style={{ marginLeft: "10px" }}
    >
      <Form.Label>Destination City</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter destination city"
        name="destination"
        value={searchParams.destination}
        onChange={handleInputChange}
        required
      />
    </Form.Group>

    <Form.Group
      controlId="travelDate"
      className="mr-2"
      style={{ marginLeft: "10px" }}
    >
      <Form.Label>Travel Date</Form.Label>
      <Form.Control
        type="date"
        name="travelDate"
        value={searchParams.travelDate}
        onChange={handleInputChange}
        required
      />
    </Form.Group>

    <Form.Group
      controlId="returnDate"
      className="mr-2"
      style={{ marginLeft: "10px" }}
    >
      <Form.Label>Return Date</Form.Label>
      <Form.Control
        type="date"
        name="returnDate"
        value={searchParams.returnDate}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Button
      variant="primary"
      onClick={handleSearch}
      className="align-self-end"
      style={{ marginLeft: "10px" }}
    >
      Search
    </Button>
  </Form>
);

export default SearchForm;
