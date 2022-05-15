import React from "react";
import "./EmailDetails.css";
import { IconButton, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UndoTwoToneIcon from "@mui/icons-material/UndoTwoTone";
import ArrowRightAltTwoToneIcon from "@mui/icons-material/ArrowRightAltTwoTone";
import PrintIcon from "@mui/icons-material/Print";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedMail } from "../../redux-store";


const EmailDetails = () => {
    const mail = useSelector(selectedMail)
  const navigate = useNavigate();

  return (
    <div className="details">
      <div className="details__left">
        <IconButton>
          <ArrowBackIcon onClick={() => navigate("/a")} /> Back
        </IconButton>
        <IconButton>
          <UndoTwoToneIcon />
        </IconButton>
        <IconButton>
          <ArrowRightAltTwoToneIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="details__msg">
        <div className="details__header">
          <h4>{mail.subject}</h4>
        </div>
        <div className="details__middleheader">
          <div className="details__middleheaderleft">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{mail.subject}</h4>
            <p>{mail.name}</p>
          </div>
          <div className="details__middleheaderRight">
            <IconButton>
              <PrintIcon />
            </IconButton>
            <p>{mail.time}</p>
            <IconButton>
              <StarOutlineIcon />
            </IconButton>
          </div>
        </div>

        <div className="details__body">
          <p>{mail.message}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailDetails;
