import { LockOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import React, { useState } from "react";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmailId(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  console.log(emailId);
  console.log(password);

  const submitHandler = (e) => {
    e.preventDefault();
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCI6khKbzl59G5x5JnMjMfiuBe2-AIoKqc";
    axios
      .post(url, {
        email: emailId,
        password: password,
        returnSecureToken: true,
      })
      .then((res) => {
        console.log(res.data.email);
        localStorage.setItem("userId", res.data.email)
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ariaLabel = { "aria-label": "description" };
  return (
    <Grid>
      <Paper
        style={{ padding: 20, height: "60vh", width: 300, margin: "90px auto" }}
      >
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1bbd7e" }}>
            <LockOutlined></LockOutlined>
          </Avatar>
          <Typography variant="h2">Login</Typography>
        </Grid>
        <br></br>
        <form onSubmit={submitHandler}>
          <Input
            value={emailId}
            onChange={emailHandler}
            inputProps={ariaLabel}
            placeholder="email Id"
            fullWidth
          ></Input>
          <br></br>
          <Input
            value={password}
            onChange={passwordHandler}
            inputProps={ariaLabel}
            placeholder="password"
            type="password"
            fullWidth
          />
          <br />
          <Grid align="center">
            <Button
              type="submit"
              variant="contained"
              style={{ marginTop: "20px" }}
              fullWidth
            >
              Login
            </Button>
            <Typography style={{ marginTop: "10px" }}>
              <Link to="/forgotpsd">forgot password</Link>
            </Typography>
            <Typography style={{ marginTop: "10px" }}>
              Need an account?
              <Link to="/signup">Signup</Link>
            </Typography>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
