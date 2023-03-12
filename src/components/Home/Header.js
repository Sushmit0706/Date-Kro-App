import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import datingicon from './datingicon.png';
import './Header.css';
// import {IconButton} from '@mui/icons-material';


function Header() {
    return (
        <div className='Dating-header'>
            {/* <IconButton> */}
                
            {/* </IconButton> */}

            <PersonIcon className='Header-icons' fontSize='large' />
            <img src={datingicon} />
            <ChatIcon className='Header-icons' fontSize='large' />

        </div>
    )
}

export default Header
