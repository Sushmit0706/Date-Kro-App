import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelIcon from '@mui/icons-material/Cancel';
import './Footer.css';

function Footer() {
  return (
    <div className='Dating-footer'>
      <CancelIcon className='Footer-icons' fontSize='large'/>
      <FavoriteIcon className='Footer-icons' fontSize='large'/>
      
    </div>
  )
}

export default Footer
