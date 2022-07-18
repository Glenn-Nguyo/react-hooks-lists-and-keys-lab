import React from "react";
import user from "../data/user";
function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <p></p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {
          technologies.length !== 0 && technologies.map((tech, index) =>{
            return <span key={index}>{tech}</span>
          })
        }
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
