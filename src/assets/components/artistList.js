import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function List() {
  const fetchURL =
    "https://dev-assignment.ew.r.appspot.com/search?q=Eminem&limit=5&off";
  const getItems = () => fetch(fetchURL).then((res) => res.json());

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
              <Card.Title> {item.uri}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card>
          );
        })}
    </div>
  );
}

export default List;
