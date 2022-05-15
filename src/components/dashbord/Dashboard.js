import React from "react";
import "./Dashboard.css";
import Header from "../header/Header";
import Sidebar from "../sidebars/Sidebar";
import Compose from "../compose/Compose";
import { useSelector } from "react-redux";
import { selectMailMsg } from "../../redux-store";
import EmailList from "../email/EmailList";
import { Routes, Route } from "react-router-dom";

import EmailDetails from "../email/EmailDetails";

const Dashboard = () => {
  const openOrClose = useSelector(selectMailMsg);
  return (
    <>
      <Header />
      <div className="side-view">
        <Sidebar />

        <Routes>
          <Route  path="/a" element={<EmailList />}></Route>
          <Route path="/mail" element={<EmailDetails />} />
        </Routes>

        <EmailList />
        {openOrClose && <Compose />}
      </div>
    </>
  );
};

export default Dashboard;
