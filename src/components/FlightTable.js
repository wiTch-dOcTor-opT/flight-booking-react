import React from "react";
import { Table } from "react-bootstrap";

const FlightTable = ({ results, title }) => (
  <>
    <h2>{title}</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Flight Number</th>
          <th>Airline Name</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Duration</th>
          <th>No. Of Stops</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.flight_number}>
            <td>{result.flight_number}</td>
            <td>{result.airline_name}</td>
            <td>{result.departure_time}</td>
            <td>{result.arrival_time}</td>
            <td>{result.duration}</td>
            <td>{result.num_of_stops}</td>
            <td>{result.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <p>Total number of results: {results.length}</p>
  </>
);

export default FlightTable;
