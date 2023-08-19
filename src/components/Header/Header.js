import React from 'react';
import "./css/Header.css";
import InputIcon from "@mui/icons-material/Input"
import SearchIcon from "@mui/icons-material/Search"
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='header-left'>
          <Link to = '/'>
            <img src='' alt='logo'/>
          </Link>
        </div>
        <div className='header-middle'>
          <div className='header-search-container'>
            <SearchIcon/>
            <input type='text' placeholder='search...'/>
          </div>
        </div>
        <div className='header-right'>
          <div className='header-right-container'>
            <Avatar/>
            <InputIcon/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header