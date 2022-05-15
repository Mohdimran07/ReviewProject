import React, { useEffect, useState } from "react";
import "./Emaillist.css";
import EmailBody from "./EmailBody";
import EmailListSetting from "./EmailListSetting";
import { db } from "../../firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const string = localStorage.getItem("userId");
    let email = string.replace(/[&,+()$~%@.'":*?<>{}]/g, "");
    db.collection(`${email}`)
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setEmails(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="emaillist">
      <EmailListSetting />
      {emails.map(({ id, data }) => {
        console.log("email ", id, data);
        return (
          <EmailBody
            key={id}
            name={data.to}
            read={data.read}
            subject={data.sub}
            message={data.message}
            time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
          />
        );
      })}
    </div>
  );
};

export default EmailList;
