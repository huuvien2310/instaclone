import React from "react";
import { useLoginPageStyles } from "./styles/useLoginPageStyles";
import SEO from "../components/shared/Seo";
import {
  Card,
  CardHeader,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import FacebookIconBlue from "../images/facebook-icon-blue.svg";
import FacebookIconWhite from "../images/facebook-icon-white.png";
import { AuthContext } from "../Auth";
import { useApolloClient } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { GET_USER_EMAIL } from "../graphql/queries";
import isEmail from "validator/es/lib/isEmail";
import { AuthError } from "./SignUpPage";

interface IFormInputs {
  email: string;
  password: string;
}

function LoginPage() {
  const classes = useLoginPageStyles();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isValid },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });
  const logInWithEmailAndPassword = React.useContext(AuthContext)!
    .logInWithEmailAndPassword;
  const [showPassword, setPasswordVisibility] = React.useState(false);
  const hasPassword = Boolean(watch("password"));
  const navigate = useNavigate();
  const client = useApolloClient();
  const [error, setError] = React.useState("");

  async function onSubmit({ input, password }: any) {
    try {
      let email;
      setError("");
      if (!isEmail(input)) {
        email = await getUserEmail(input);
      }
      logInWithEmailAndPassword(email, password);
      setTimeout(() => navigate("/"), 0);
    } catch (error) {
      console.error("Error logging in", error);
    }
  }

  async function getUserEmail(input: string) {
    const variables = { input };
    const response = await client.query({
      query: GET_USER_EMAIL,
      variables,
    });
    console.log("eiwquo", response.data.users);
    const userEmail = response.data.users[0]!.email || "no@email.com";
    console.log(userEmail);
    return userEmail;
  }

  function togglePasswordVisibility() {
    setPasswordVisibility((prev) => !prev);
  }

  return (
    <>
      <SEO title="Login" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                //@ts-ignore
                {...register("input", {
                  required: true,
                  minLength: 5,
                })}
                variant="filled"
                label="Username, email, or phone"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                fullWidth
                {...register("password", {
                  required: true,
                  minLength: 5,
                })}
                InputProps={{
                  endAdornment: hasPassword && (
                    <InputAdornment position="end">
                      <Button onClick={togglePasswordVisibility}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputAdornment>
                  ),
                }}
                variant="filled"
                label="Password"
                margin="dense"
                className={classes.textField}
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
              />
              <Button
                disabled={isSubmitting || !isValid}
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
                type="submit"
              >
                Log In
              </Button>
            </form>
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>
            <LoginWithFacebook color="secondary" iconColor="blue" />
            {/* @ts-ignore */}
            <AuthError error={error} />
            <Button fullWidth color="secondary">
              <Typography variant="caption">Forgot password?</Typography>
            </Button>
          </Card>
          <Card className={classes.signUpCard}>
            <Typography align="right" variant="body2">
              Don't have an account?
            </Typography>
            <Link to="/accounts/emailsignup">
              <Button color="primary">Sign up</Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export function LoginWithFacebook({ color, iconColor, variant }: any) {
  const classes = useLoginPageStyles();
  const facebookIcon =
    iconColor === "blue" ? FacebookIconBlue : FacebookIconWhite;

  return (
    <Button fullWidth color={color} variant={variant}>
      <img
        src={facebookIcon}
        alt="facebook icon"
        className={classes.facebookIcon}
      />
      Log In with Facebook
    </Button>
  );
}

export default LoginPage;
