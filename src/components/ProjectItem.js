import React from "react";
import user from "../data/user";
import User from "../data/user"
function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <span>
           <h1 key={user.id}>{user.technologies}</h1>
        </span>
        <span> <h1 key={user.id}>{user.technologies}</h1></span>
        <span> <h1 key={user.id}>{user.technologies}</h1></span>
      </div>
    </div>
  );
}

export default ProjectItem;
