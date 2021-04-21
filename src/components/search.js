import React, { useState } from "react";
import { Form } from "react-bootstrap";
import artistList from "./artistList";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();
  };

  console.log(props);
  return (
    <div>
      <Form onSubmit={handleSearch}>
        <Form.Control
          type="search"
          name="searchTerm"
          value={searchTerm}
          placeholder="Search for artists"
          onChange={handleInputChange}
        />
      </Form>
      <artistList searchTerm={searchTerm} />
    </div>
  );
}

export default Search;
