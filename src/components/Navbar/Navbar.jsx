import React from 'react'
import './Navbar.scss'
import TestLogo from '../../Assets/TestLogo.svg'
import home_FILL0_wght300_GRAD0_opsz24 from '../../Assets/home_FILL0_wght300_GRAD0_opsz24.svg'
import group_FILL0_wght300_GRAD0_opsz24 from '../../Assets/group_FILL0_wght300_GRAD0_opsz24.svg'
import calendar_today_FILL0_wght300_GRAD0_opsz24 from '../../Assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import chat_bubble_FILL0_wght300_GRAD0_opsz24 from '../../Assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import credit_card_FILL0_wght300_GRAD0_opsz24 from '../../Assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import seniorwoman from '../../Assets/seniorwoman.png'
import settings_FILL0_wght300_GRAD0_opsz24 from '../../Assets/settings_FILL0_wght300_GRAD0_opsz24.svg'
import more_vert_FILL0_wght300_GRAD0_opsz24 from '../../Assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg'

const Navbar = () => {
  return (
    <div className="Header">
      <img src={TestLogo} alt="test logo" />

      <ul className="NavB flex">

        <li className="navItem">
          <img src={home_FILL0_wght300_GRAD0_opsz24} alt="" />
          <a href="/Navbar" className="navLink">Overview</a>
        </li>

        <li className="navItem">
          <img src={group_FILL0_wght300_GRAD0_opsz24} alt="" />
          <a href="/Navbar" className="navLink">Patient</a>
        </li>

        <li className="navItem">
          <img src={calendar_today_FILL0_wght300_GRAD0_opsz24} alt="" />
          <a href="/Navbar" className="navLink">Schedule</a>
        </li>

        <li className="navItem">
          <img src={chat_bubble_FILL0_wght300_GRAD0_opsz24} alt="" />
          <a href="/Navbar" className="navLink">Messages</a>
        </li>

        <li className="navItem">
          <img src={credit_card_FILL0_wght300_GRAD0_opsz24} alt="" />
          <a href="/Navbar" className="navLink">Transactions</a>
        </li>
      </ul>

      <div className="AdminName">
        <img src={seniorwoman} alt="" />
        <div className="AdminText">
          <span> Dr. Jose Simmons </span>
          <span> General Practitioner </span>
        </div>


        <div className="AdminIcon">
          <img src={settings_FILL0_wght300_GRAD0_opsz24} alt="" />
          <img src={more_vert_FILL0_wght300_GRAD0_opsz24} alt="" />
        </div>
      </div>



    </div>
  )

}

export default Navbar