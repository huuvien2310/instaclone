import React from "react";
import { useSignUpPageStyles } from "./styles/useSignUpPageStyles";
import SEO from "../components/shared/Seo";
import {
  Card,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { LoginWithFacebook } from "./LoginPage";
import { AuthContext } from "../Auth";
import { useForm } from "react-hook-form";
import isEmail from "validator/es/lib/isEmail";
import { useApolloClient } from "@apollo/react-hooks";
import { CHECK_IF_USERNAME_TAKEN } from "../graphql/queries";
import { CheckCircleOutline, HighlightOff } from "@material-ui/icons";

interface IFormInputs {
  email: string;
  name: string;
  username: string;
  password: string;
}

function SignUpPage() {
  const classes = useSignUpPageStyles();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting, isValid },
  } = useForm<IFormInputs>({ mode: "onBlur" });
  const signUpWithEmailAndPassword = React.useContext(AuthContext)!
    .signUpWithEmailAndPassword;
  const [error, setError]: any = React.useState("");
  const navigate = useNavigate();
  const client = useApolloClient();

  async function onSubmit(data: any) {
    try {
      setError("");
      await signUpWithEmailAndPassword(data);
      setTimeout(() => navigate("/"), 0);
    } catch (error) {
      console.error("Error signing up", error);
      handleError(error);
    }
  }

  function handleError(error: any) {
    if (error.message.includes("users_username_key")) {
      setError("Username already taken");
    } else if (error.code.includes("auth")) {
      setError(error.message);
    }
  }

  async function validateUsername(username: string): Promise<boolean> {
    const variables = { username };
    const response = await client.query({
      query: CHECK_IF_USERNAME_TAKEN,
      variables,
    });
    const isUsernameValid = response.data.users.length === 0;
    return isUsernameValid;
  }

  const errorIcon = (
    <InputAdornment position="start">
      <HighlightOff style={{ color: "red", height: 30, width: 30 }} />
    </InputAdornment>
  );

  const validIcon = (
    <InputAdornment position="end">
      <CheckCircleOutline style={{ color: "#ccc", height: 30, width: 30 }} />
    </InputAdornment>
  );

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("email", {
                  required: true,
                  validate: (value) => isEmail(value),
                })}
                InputProps={{
                  endAdornment: errors.email
                    ? errorIcon
                    : touchedFields.email && validIcon,
                }}
                fullWidth
                variant="filled"
                label="Email"
                type="email"
                margin="dense"
                className={classes.textField}
              />
              <TextField
                {...register("name", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                })}
                InputProps={{
                  endAdornment: errors.name
                    ? errorIcon
                    : touchedFields.name && validIcon,
                }}
                fullWidth
                variant="filled"
                label="Full Name"
                margin="dense"
                className={classes.textField}
              />
              <TextField
                {...register("username", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                  // accept only lowercase/uppercase letters, numbers, periods and underscores
                  pattern: /^[a-zA-Z0-9_.]*$/,
                  validate: async (username) =>
                    await validateUsername(username),
                })}
                InputProps={{
                  endAdornment: errors.username
                    ? errorIcon
                    : touchedFields.username && validIcon,
                }}
                fullWidth
                variant="filled"
                label="Username"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                {...register("password", {
                  required: true,
                  minLength: 5,
                })}
                InputProps={{
                  endAdornment: errors.password
                    ? errorIcon
                    : touchedFields.password && validIcon,
                }}
                fullWidth
                variant="filled"
                label="Password"
                type="password"
                margin="dense"
                className={classes.textField}
                autoComplete="new-password"
              />
              <Button
                type="submit"
                disabled={error || !isValid || isSubmitting}
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </form>
            {/* @ts-ignore */}
            <AuthError error={error} />
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

export function AuthError({ error }: any) {
  return (
    Boolean(error) && (
      <Typography
        align="center"
        gutterBottom
        variant="body2"
        style={{ color: "red" }}
      >
        {error}
      </Typography>
    )
  );
}

export default SignUpPage;
