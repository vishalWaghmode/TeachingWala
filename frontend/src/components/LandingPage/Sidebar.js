import { Public,Work } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-options'>
          <div className='sidebar-option'>
            <Link>Home</Link>
          </div>
          <div className='sidebar-option'>
            <Link>PUBLIC</Link>
            <div className='link'>
              <div className='link-tag'>
                <Public/>
                <Link>Question</Link>
              </div>
              <div className='tags'>
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className='sidebar-option'>
            <p>TEAMS</p>
            <div className='link-tag'>
              <Work/>
              <Link>Team</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar