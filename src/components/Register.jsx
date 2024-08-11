// import React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function Register() {
//   return (
//     <Container>
//       <Box my={4}>
//         <Typography variant="h4" component="h2" gutterBottom>
//           Register
//         </Typography>
//         <Typography variant="body1">
//           Sign up today to start booking your rides with Road Wheels. Enjoy exclusive discounts and offers as a registered member.
//         </Typography>
//       </Box>
//     </Container>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, Snackbar, Alert } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEnvelope, faUserTag } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assests/bg-car.jpg';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailId, setEmailId] = useState('');
    const [role, setRole] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const isSignUpDisabled = !username || !password || !emailId || !role;

    const login = (username, password) => {
        let obj = { username, password };
        axios.post('http://localhost:9192/users/authenticate', obj)
            .then(response => {
                console.log("Response data of user authenticate", response);

                let role = ((response.data || {}).userDto || {}).role || '';
                let userName = ((response.data || {}).userDto || {}).username || '';
                let id = ((response.data || {}).userDto || {}).id || '';

                let token = 'Bearer ' + response.data.accessToken;
                localStorage.setItem("JWT", token);
                localStorage.setItem("username", userName);
                localStorage.setItem("role", role);
                localStorage.setItem("id", id);

                switch (role) {
                    case 'CUSTOMER':
                        navigate('/user/dashboard');
                        break;
                    case 'HOST':
                        navigate('/host/dashboard');
                        break;
                    case 'ADMIN':
                        navigate('/admin/dashboard');
                        break;
                    default:
                        break;
                }
            })
            .catch(error => {
                setMsg('Invalid Credentials');
            });
    };

    const signUp = () => {
        if (!username || !password || !emailId || !role) {
            setMsg("Please fill in all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailId)) {
            setMsg("Please enter a valid email address");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setMsg("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character");
            return;
        }

        let obj = { username, password, emailId, role };

        axios.post('http://localhost:9192/users/new', obj)
            .then(response => {
                login(username, password);
            })
            .catch(error => {
                setMsg("Issue in processing signup");
            });
    };

    return (
        <Container
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: '100%',
                    maxWidth: 500
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Sign Up
                </Typography>
                {msg && (
                    <Snackbar
                        open={!!msg}
                        autoHideDuration={6000}
                        onClose={() => setMsg('')}
                    >
                        <Alert onClose={() => setMsg('')} severity="error">
                            {msg}
                        </Alert>
                    </Snackbar>
                )}
                <form>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label={<FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />}
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            type="password"
                            label={<FontAwesomeIcon icon={faEye} style={{ marginRight: 8 }} />}
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            type="email"
                            label={<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 8 }} />}
                            variant="outlined"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                    </Box>
                    <Box mb={2}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Select Role</InputLabel>
                            <Select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                label="Select Role"
                            >
                                <MenuItem value="CUSTOMER">User</MenuItem>
                                <MenuItem value="HOST">Host</MenuItem>
                                <MenuItem value="ADMIN">Admin</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={signUp}
                        disabled={isSignUpDisabled}
                    >
                        Sign Up
                    </Button>
                </form>
                <Box mt={2} textAlign="right">
                    <Typography variant="body2" color="textSecondary">
                        Have an Account? &nbsp;
                        <Button
                            color="primary"
                            onClick={() => navigate("/auth/login")}
                        >
                            Login
                        </Button>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;
