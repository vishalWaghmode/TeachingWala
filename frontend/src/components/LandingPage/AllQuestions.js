import React from 'react'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import './css/AllQuestions.css'

function AllQuestions() {
  return (
    <div className='all-questions'>
      <div className='all-questions-container'>
        <div className='all-questions-left'>
          <div className='all-options'>
            <div className='all-option'>
              <p>0</p>
              <span>clicks</span>
            </div>
            <div className='all-option'>
              <p>0</p>
              <small>views</small>
            </div>
          </div>
        </div>
        <div className='question-block'>
          <h4>This is question title?</h4>
          <div style={{ width: "90%" }}>
            <div>
              This is the discription of the problem statment which u have
              given or the what ans u are being accepting form the front person
              This is the discription of the problem statment which u have</div>
          </div>
          <div style={{ display: "flex" }}>
            <span className='question-tags'>React</span>
            <span className='question-tags'>Mongodb</span>
            <span className='question-tags'>Node js</span>
            <div className='author'>
              <div className='author-details'>
                <Avatar />
                <p>User name</p>
              </div>
              <Link>
                <button className='bid-btn'>Rs. 50</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllQuestions