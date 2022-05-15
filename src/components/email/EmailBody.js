import React  from 'react'
import './EmailBody.css';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useNavigate } from 'react-router-dom';
import { openMessage } from '../../redux-store';
import { useDispatch } from 'react-redux';

const EmailBody = ({ name, subject, message, time, read}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const string = localStorage.getItem("userId")
    //     console.log(string);
    //     let id = string.replace(/[&,+()$~%@.'":*?<>{}]/g, "");
        
    
    //     db.collection(`${id}`).add({
    //       to: email,
    //       sub: sub,
    //       message: msg,
    //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //       read: true
    //     })
    //    }, [])
    const setMail = () => {
       dispatch(openMessage({
           name,
           subject,
           message,
           time,
           
       }))
       navigate("/mail")
    }
 
    const readMsg = read ? "" : "unread"
  return (
    <div className='emailbody' onClick={setMail}>
        <div className='emailbody__left'>
           <CheckBoxOutlineBlankIcon />

           <h4>{readMsg}{name}</h4>
        </div>
        <div className='emailbody__middle'>
            <div className='emailbody__middle__msg'>
                <p>
                    <b>{subject}</b>{message}
                </p>
            </div>
        </div>
        <div className='emailbody__right'>
            <p>{time}</p>
        </div>
      
    </div>
  )
}

export default EmailBody
