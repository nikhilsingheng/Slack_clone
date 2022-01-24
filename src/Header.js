import React from "react";
import './Header.css';
import {Avatar, Input} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessAlarm'; 
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useStateValue } from "./StateProvider";


function Header() {
    const [{user}] =useStateValue();
    return (
        <div className="header">
        <div className="header_left">
           
        <Avatar
            className="header_avatar"
            alt={user?.displayname}
            src={user?.photoURL}
            />
           
            <AccessTimeIcon/>
        </div>  
        <div className='header_search'>
            
                <SearchIcon />
                <input placeholder = "search hello world" /> 
             

        </div>
        <div className="header_right">
         
            <HelpOutlineIcon />
        </div>
        </div>
    )
}

export default Header



