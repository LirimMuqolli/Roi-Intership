import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";


const FetchEmployes = () => {
  const [cardData, setCardData] = useState([]);
  const [visible] = useState(3);

  const allCardData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=35");
    setCardData(response.data.results);
  };


  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (person, index) => {
    return (
        
         
       
      <Card style={{ width: "18rem" }}>
       
        <Card.Img variant="top" src={person.picture.large} />
        <Card.Body>
          <Card.Title>
            {person.name.first} {person.name.last}
          </Card.Title>
          <Card.Text>
            <ul>
              <li>{person.email}</li>
              <li>{person.cell}</li>
              <li>{person.gender}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    
      
    );
  };

  return (
    <>
    <div class="card-deck">
    <div className="App">
      <div className="card">
        <div className="cards">
          {cardData.slice(0, visible).map(renderCard)}
        </div>
      </div>
      <a href="/" className="btn btn-primary ">Read More</a>
      </div>
    </div>
    </>
  );
};

export default FetchEmployes;