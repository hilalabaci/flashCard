import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import quiz selector
import { v4 as uuidv4 } from 'uuid';

let uniqueId = uuidv4(); 

console.log(uniqueId); // Prints '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


export default function Quizzes() {
  const quizzes = {}; // replace this with a call to your selector to get all the quizzes in state
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
