import React, { useState } from 'react'
import './Compose.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { closeToSendMsg } from '../../redux-store';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';

const Compose = () => {
    const [email, setEmail] = useState("")
    const [sub, setSub] = useState("")
    const [msg, setMsg] = useState("")
   const dispatch = useDispatch();
   const submitHandler = (e) => {
    e.preventDefault();
      if(email === "" || sub === "" || msg === ""){
        alert ("please fill all the sections.")
      }
      const string = localStorage.getItem("userId")
      console.log(string);
      let id = string.replace(/[&,+()$~%@.'":*?<>{}]/g, "");
      

      db.collection(`${id}`).add({
        to: email,
        sub: sub,
        message: msg,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        
      })
      alert("email sent successful")
      setEmail("")
      setSub("");
      setMsg("");
  }
  return (
    <div className='compose'>
      <div className='compose__header'>
          <div className='compose__header__left'>
              <span>New Message</span>
          </div>
          <div className='compose__header__right'>
             <CloseIcon onClick={() => dispatch(closeToSendMsg())} ></CloseIcon>
          </div>
      </div>
      <form onSubmit={submitHandler}>
          <div className='compose__body'>
              <div className='compose__bodyForm'>
                  <input type={"email"} placeholder="to" value={email} onChange={(e) => setEmail(e.target.value)}  />
                  <input type={"text"} placeholder="Subject" value={sub} onChange={(e) => setSub(e.target.value)}  />
                  <textarea  rows={"34"} type="text" onChange={(e) => setMsg(e.target.value)}>{msg}</textarea>
              </div>
          </div>
          <div className='compose__footer'>
              <div className='compose__footerLeft'>
                 <Button type="submit"variant='contained' size="small" endIcon={<SendIcon />}>send</Button>
              </div>
          </div>
      </form>
    </div>
  )
}

export default Compose
