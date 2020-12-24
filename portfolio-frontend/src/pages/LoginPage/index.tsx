import React, { useEffect, useReducer } from "react";

import { getJWT } from "../../helpers/jwt";

import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";

import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { useStyles } from "./useStyles";

import "./styles.css";
import { Footer, Toggle } from "../../components";
import api from "../../services/api";
import { useHistory } from "react-router";

function LoginPage() {
  const classes = useStyles();
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });
    }
    if (getJWT()) history.push("port-admin");
  }, [state.username, state.password]);

  const handleLogin = async () => {
    const response = await api
      .post("/login", {
        email: state.username,
        password: state.password,
      })
      .then((res) => {
        return res.data;
      })
      .catch(() => {
        return "invalid-password";
      });
    if (response !== "invalid-password") {
      dispatch({
        type: "loginSuccess",
        payload: "Login Successfully",
      });
      localStorage.setItem("currentUser", response.token);
      history.push("port-admin");
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Incorrect username or password",
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  return (
    <>
      <Toggle />
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Login Administração" />
          <CardContent>
            <div>
              <TextField
                error={state.isError}
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
              />
              <TextField
                error={state.isError}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                helperText={state.helperText}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              onClick={handleLogin}
              disabled={state.isButtonDisabled}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
      <Footer />
    </>
  );
}

export default LoginPage;
