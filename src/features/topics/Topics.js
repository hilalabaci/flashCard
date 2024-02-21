import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selector
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import { v4 as uuidv4 } from "uuid";

let uniqueId = uuidv4();

console.log(uniqueId); // Prints '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

export default function Topics() {
  const topics = useSelector(selectTopics); // replace this with a call to your selector to select all the topics in state

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
            <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
              <div className="topic-container">
                <img src={topic.icon} alt="" />
                <div className="text-content">
                  <h2>{topic.name}</h2>
                  <p>{topic.quizIds.length} Quizzes</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
