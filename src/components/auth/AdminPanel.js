import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";

function AdminPanel() {
  // Create a state variable to store the API data
  const [data, setData] = useState(null);

  // Effect to fetch data on component mount
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Use axios to send a GET request to the API
        const response = await axios.get(
          "http://localhost:3001/api/EffectifGet"
        );
        // If the request is successful, store the response data in state
        setData(response.data);
      } catch (error) {
        // If there is an error, log it to the console
        console.error("Error fetching data: ", error);
        setData({ error: "Failed to fetch data" });
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect only runs once, after the initial render

  // Render the component
  return (
    <Container>
 <div>
      <h1>Admin Panel</h1>
      {/* Conditionally render data or a loading message */}
      {data ? (
        <div>
          <h2>Effectif Data:</h2>
          {/* Render the JSON data as a string */}
          <table className="table">
            <thead>
              <tr>
                <th>Matricule</th>
                <th>fullname</th>
                <th>entity</th>
                <th>fonction</th>
                <th>Affectation</th>
              </tr>
            </thead>

            <tbody>
              {data.map((effectif, index) => (
                <tr key={index}>
                    <td> {effectif.Matricule} </td>
                    <td> {effectif.fullname} </td>
                    <td> {effectif.entity} </td>
                    <td> {effectif.fonction} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </Container>
   
  );
}

export default AdminPanel;
