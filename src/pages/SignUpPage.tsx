import React from "react";
import { useSignUpPageStyles } from "./styles/useSignUpPageStyles";
import SEO from "../components/shared/Seo";
import { Card, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { LoginWithFacebook } from "./LoginPage";
import { UserAuth } from "../Auth";

function SignUpPage() {
  const classes = useSignUpPageStyles();
  //@ts-ignore
  const { signUpWithEmailAndPassword } = UserAuth();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    username: "",
    name: "",
  });
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signUpWithEmailAndPassword(values);
    navigate("/");
  }

  return (
    <>
      <SEO title="Sign up" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <div className={classes.cardHeader} />
            <Typography className={classes.cardHeaderSubHeader}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <LoginWithFacebook
              color="primary"
              iconColor="white"
              variant="contained"
            />
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <Typography variant="body2" color="textSecondary">
                OR
              </Typography>
              <div className={classes.orLine} />
            </div>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="filled"
                label="Mobile Number or Email"
                type="email"
                margin="dense"
                className={classes.textField}
                name="email"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Full Name"
                margin="dense"
                className={classes.textField}
                name="name"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Username"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
                name="username"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Password"
                type="password"
                margin="dense"
                className={classes.textField}
                autoComplete="new-password"
                name="password"
                onChange={handleChange}
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </Card>
          <Card className={classes.loginCard}>
            <Typography align="right" variant="body2">
              Have an account?
            </Typography>
            <Link to="/accounts/login">
              <Button color="primary" className={classes.loginButton}>
                Log in
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export default SignUpPage;
