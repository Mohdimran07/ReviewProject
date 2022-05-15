import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { openToSendMsg } from '../../redux-store';
import './Sidebar.css';
import Sidebaroptions from './Sidebaroptions';

const Sidebar = () => {
    const dispatch = useDispatch()
  return (
    <div className='sidebar'>
      <Button className='compose__btn' onClick={() => dispatch(openToSendMsg())}>compose</Button>
      <Sidebaroptions  title="Inbox" number="3" isActive={true} />
      <Sidebaroptions  title="Unread"  />
      <Sidebaroptions  title="Starred"  />
      <Sidebaroptions  title="Drafts"  />
      <Sidebaroptions  title="Sent"  />
    </div>
  )
}

export default Sidebar
