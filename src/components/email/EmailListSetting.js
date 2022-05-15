import { IconButton } from '@mui/material'
import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EmailListSetting = () => {
  return (
    <div className='emaillist__settings'>
      <div className='emaillist__setting left'>
         <IconButton>
          <CheckBoxOutlineBlankIcon />
         </IconButton>
         <IconButton>
             <ExpandMoreIcon />
         </IconButton>
      </div>
    </div>
  )
}

export default EmailListSetting
