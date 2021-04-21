import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";

function List(searchTerm) {
  const fetchURL =
    "https://dev-assignment.ew.r.appspot.com/search?q=" +
    searchTerm +
    "&limit=20&off";
  const getItems = () => fetch(fetchURL).then((res) => res.json());

  console.log(searchTerm);

  const [items, setItems] = useState();

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div>
      {items &&
        items.artists.items.map((item) => {
          return (
            <Card key={item.name}>
              <Card.Title> {item.name}</Card.Title>
              <Button variant="secondary">Add</Button>
            </Card>
          );
        })}
      <nav aria-label="...">
        <ul class="pagination pagination-lg">
          <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default List;
