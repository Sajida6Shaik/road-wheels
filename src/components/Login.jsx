import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import backgroundImage from "../assests/bg-car.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import { Container, Typography, Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, Snackbar, Alert } from '@mui/material';

function Login() {
  const [username, setUsername] = useState("");
  const [param] = useSearchParams();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const login = () => {
    let obj = {};
    obj.username = username;
    obj.password = password;

    axios
      .post("http://localhost:9194/users/authenticate", obj, {})
      .then(function (response) {
        console.log("Response data of user authenticate", response);

        let role = ((response.data || {}).userDto || {}).role || "";
        let userName = ((response.data || {}).userDto || {}).username || "";
        let id = ((response.data || {}).userDto || {}).id || "";

        let token = "Bearer " + response.data.accessToken;
        localStorage.setItem("JWT", token);
        localStorage.setItem("username", userName);
        localStorage.setItem("role", role);
        localStorage.setItem("id", id);

        switch (role) {
          case "CUSTOMER":
            navigate("/");
            break;
          case "HOST":
            navigate("/host/dashboard");
            break;
          case "ADMIN":
            navigate("/admin/dashboard");
            break;
          default:
            break;
        }
      })
      .catch(function (error) {
        //handle error
        setMsg("Invalid Credentials");
      });
  };
  return (
    <Container
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        {msg && (
          <Snackbar
            open={!!msg}
            autoHideDuration={6000}
            onClose={() => setMsg("")}
          >
            <Alert onClose={() => setMsg("")} severity="error">
              {msg}
            </Alert>
          </Snackbar>
        )}
        <form>
          <Box mb={2}>
            <TextField
              fullWidth
              label={
                <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />
              }
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              type="password"
              label={
                <FontAwesomeIcon icon={faEye} style={{ marginRight: 8 }} />
              }
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button variant="contained" color="primary" fullWidth onClick={login}>
            Login
          </Button>
        </form>
        <Box mt={2} textAlign="right">
          <Typography variant="body2" color="textSecondary">
            Don't you have an Account? &nbsp;
            <Button color="primary" onClick={() => navigate("/register")}>
              Sign up
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
    // <div
    //   style={{ backgroundImage: `url(${backgroundImage})`, height: '80vh' }}
    //   className="h-70"
    // >
    //   <div className="container w-50  h-100 d-flex justify-content-center ">
    //     <div className="w-50">
    //       <div className="row">
    //         <div className="col ml-auto mt-5">
    //           <div className="card">
    //             <div className="card-header ">
    //               <h3 className="text-center">Login</h3>
    //             </div>
    //             <div className="card-body ">
    //               {msg !== "" ? (
    //                 <div className="alert alert-danger" role="alert">
    //                   {msg}
    //                 </div>
    //               ) : null}
    //               <form>
    //                 <div class="mb-3">
    //                   <label for="username" class="form-label">
    //                     <FontAwesomeIcon icon={faUser} /> Enter Username:
    //                   </label>
    //                   <input
    //                     type="text"
    //                     class="form-control"
    //                     id="username"
    //                     placeholder="Enter Your Username"
    //                     onChange={(e) => setUsername(e.target.value)}
    //                   />
    //                 </div>
    //                 <div class="mb-3">
    //                   <label for="password" class="form-label">
    //                     <FontAwesomeIcon icon={faEye} /> Enter Password:
    //                   </label>
    //                   <input
    //                     type="password"
    //                     class="form-control"
    //                     id="password"
    //                     placeholder="Enter Your Password"
    //                     onChange={(e) => setPassword(e.target.value)}
    //                   />
    //                 </div>
    //               </form>
    //             </div>
    //             <div className="card-footer text-center ">
    //               <button
    //                 type="button"
    //                 className="btn btn-primary"
    //                 onClick={() => login()}
    //               >
    //                 Login
    //               </button>
    //             </div>
    //           </div>
    //           <div className="my-2" style={{ float: "right" }}>
    //             <span className="text-white ">
    //               Don't you have an Account? &nbsp;
    //               <a
    //                 class="btn btn-primary"
    //                 href="#"
    //                 role="button"
    //                 onClick={() => navigate("/")}
    //               >
    //                 Sign Up
    //               </a>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Login;
