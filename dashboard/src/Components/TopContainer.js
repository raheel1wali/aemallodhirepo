import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Women from '../img/women.jpg';

function TopContainer() {
  return (
    <div className='topContainer'>
        <div className='inputBox'>
            <input type='text' placeholder='Search item, collections'/>
            <i>
                <BiSearchAlt />
            </i>
        </div>

        <div className='profileConatiner'>
            <i className='profileIcon'>
            <FaBell />
            </i>

            <div className='profileImage'>
                <img src={Women} alt='' />
            </div>

            <p className='profileName'>Olivia Christine</p>
            <i className='menuChevron' id='menuChevron'>
                <FaChevronDown />
            </i>
        </div>
    </div>
  );
}

export default TopContainer