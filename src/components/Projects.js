import React, {useState} from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import {SingleProject} from './SingleProject'

export const Projects = ({ activeValue = true}) => {
  const [active, setActive] = useState(activeValue);
  const {setSelectedProject} = useSelectedProjectValue();
  const {projects} = useProjectsValue();

  return (
    projects && projects.map(project => (
      <li 
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="porject-action"
        className={ active === project.projectId
          ? 'active_sidebar__project'
          : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
        <SingleProject project={project}/>
      </li>
    ))
  )
}