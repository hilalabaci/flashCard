import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { v4 as uuidv4 } from 'uuid';

let uniqueId = uuidv4(); 

console.log(uniqueId); // Prints '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


export default function Card({ id }) {
  const card = {}; // replace this with a call to your selector to get a card by id
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
