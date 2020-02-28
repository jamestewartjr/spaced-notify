import React, {useState} from 'react';
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa'
import { useSelectedProjectValue } from '../../context';


export const Sidebar = () => {
  const {setselectedProject} = useSelectedProjectValue;
  const [active, setActive] = useState('inbox')
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li className="inbox" data-testid="inbox">
          <span> <FaInbox/> </span>
          <span> Inbox </span>
        </li>
        <li className="today" data-testid="today">
          <span> <FaRegCalendar/> </span>
          <span> Today </span>
        </li>
        <li className="next_7" data-testid="next_7">
          <span> <FaRegCalendarAlt/> </span>
          <span> Next 7 days </span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span> <FaChevronDown/> </span>
        <h1> Projects</h1>
      </div>

      <ul className="sidebar__projects"> Projects here! </ul>

      Add Projects Component!
    </div>
  );
};