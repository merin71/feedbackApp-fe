import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [isEmailFormatValid, setIsEmailFormatValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(true);
    const[input, setInput] = new useState(
        {
          email: "",
          password: "",
        }
      )

      const inputHandler= (event)=> {
        setInput({...input,[event.target.name]:event.target.value});
        if(event.target.name === "email"){
          if(validateEmail(event.target.value)){
            setIsEmailFormatValid (true);
          } else {
            setIsEmailFormatValid(false);
          }
        }
        if(event.target.name === "password") {
            if(event.target.value === "") {
              setIsPasswordValid(false);
            } else {
              if((event.target.value.length) >= 8){
                setIsPasswordValid(true);
                setIsPasswordLengthValid(true);
              } else {
                setIsPasswordLengthValid(false);
                setIsPasswordValid(false);
              }    
            }
          } 
      }
          
      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      const handleLogin = (e) => {
        console.log(input);
      }
  return (
    <div className='sign-in'>
        <div className='sign-in-wrapper'>
        <Grid container component="main" className='wrapper-main'>
        <Grid className='sign-in-input' item xs={12} sm={8} md={6}>
        <Box
            sx={{
              my: 4,
              mx: 6,
              display: 'flex',
              flexDirection: 'column',
            //   justifyContent: 'center',
              alignItems: 'center',
              padding:'20px'
            }}
          >
            <Box className='box-login-form' component="form" noValidate sx={{ mt: 1 }}>
            <TextField className="signin-field"
                error={!isEmailFormatValid}
                margin="normal"
                required
                fullWidth
                name="email"
                label="E-mail Id"
                id="email"
                autoComplete="email"
                value = {input.email}
                onChange={inputHandler} 
                helperText = {!isEmailFormatValid ? "Please enter a valid email-id." : ""} 
              />
              <TextField
                error={!isPasswordValid}
                type='password'
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="password"
                value = {input.password}
                onChange={inputHandler}
                helperText = {isPasswordLengthValid ? "" : "Password must have atleast 8 characters."}
              />
              <Button className='signin-button'
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, backgroundColor: "#014f86", fontFamily: "Poppins"}}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
        </Box>

        </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Login