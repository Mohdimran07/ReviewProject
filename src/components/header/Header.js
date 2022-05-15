import { IconButton } from '@mui/material';
import React from 'react';
import "./Header.css";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo} alt="logo" height={"80px"}></img>
        </div>
        <div className='header__middle'>
            <div className='search__mail'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type={"text"} placeholder="search mails" />
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
      
    </div>
  )
}

export default Header
