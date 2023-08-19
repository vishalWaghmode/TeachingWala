import React from 'react'
import "./css/index.css"
import Sidebar from './Sidebar'
import Main from './Main'

function index() {
  return (
    <div className='teach-index'>
        <div className='teach-index-content'>
            <Sidebar/>
            <Main/>
        </div>
    </div>
  )
}

export default index