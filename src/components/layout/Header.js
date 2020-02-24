import React from 'react';
import {FaToggleOn, FaListUl, FaPlus} from 'react-icons/fa'

export const Header = () => {
  return (
    <header 
      className="header"
      data-testid="header"
    >
      <nav>
        <div className="logo">
          <FaListUl/>
        </div>
        <div className="settings">
          <ul>
            <li><FaPlus/></li>
            <li><FaToggleOn/></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}