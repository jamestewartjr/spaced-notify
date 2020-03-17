import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
import { FaRegListAlt, FaRegCalendarAlt} from 'react-icons/fa';
import moment from 'moment';
import { useSelectedProjectValue} from '../context';

export const AddTask = ({ 
  showAddTaskMain = true, 
  showShouldMain = false,
  showQuickAddTask,
  setShowQuickAddTask
}) => {
  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [project, setProject] = useState('');
  const [showMain, setShowMain] = useState(shouldShowMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);

  const {selectedProject} = useSelectedProjectValue();

  const addTask = () => {
    const projectId = project || selectedProject;
    let collatedDate = '';

    if(projectId === 'TODAY') {
      collatedDate = moment().format('MM/DD/YYYY');
    } else if (projectId === 'NEXT_7') {
      collatedDate = moment()
        .add(7, 'days')
        .format('MM/DD/YYYY');
    }
    return( 
      task && 
      projectId && 
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          projectId,
          task,
          date: collatedDate || taskDate,
          userId: 'Vxj9XEZYuURGiyTL9Zct',
        })
        .then(() =>  {
          setTask('');
          setProject('');
          setShowProjectOverlay(false);
          setShowMain('');
        })
    )
  }

  return (
    <p>stop</p>
  );
}

AddTask.propTypes = {
  showAddTaskMain: PropTypes.bool,
  shouldShowMain: PropTypes.bool,
  showQuickAddTask: PropTypes.bool,
  setShowQuickAddTask: PropTypes.func,
};