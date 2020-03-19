import React, { useEffect } from 'react';
import {Checkbox} from './Checkbox';
import {AddTask} from './AddTask';
import {useTasks} from '../hooks';
import {collectedTasks} from '../constants'
import {getTitle, getCollectedTitle, collectedTasksExist} from '../helpers';
import {useSelectedProjectValue, useProjectsValue} from '../context';

export const Tasks = () => {
  const {selectedProject} = useSelectedProjectValue();
  const {projects} = useProjectsValue();
  const {tasks} = useTasks(selectedProject);
  let projectName = '';

  if(
    projects && 
    projects.length > 0 && 
    selectedProject && 
    !collectedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  if(collectedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollectedTitle(collectedTasks, selectedProject).name;
  }

  useEffect( () => {
    document.title = `${projectName}: Todoist`;
  })

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map( task=> (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  )
}

