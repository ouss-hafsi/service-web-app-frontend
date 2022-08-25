import {Link} from 'react-router-dom'
import { Box,Typography,TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const Login = ( {handleChange, handleSubmit} ) => {
    return (
      <>
    <div className='landing-format'>
      
     <form onSubmit={handleSubmit} className='login-form' >
     <h1>Login</h1>
        <label htmlFor="username"></label>
          <input onChange={(event) => handleChange (event)} type="text" id="username" placeholder="username" />
          <label htmlFor="password"></label>
          <input onChange={(event) => handleChange (event)} type="password" id="password" placeholder="password" />
          <button  type='submit'>Sign in</button>
        </form>

      </div>

{/* <form onSubmit={handleSubmit}>
  <Box className='login-box'>
    <Typography>Login</Typography>
    <TextField margin='normal' onChange={(event) => handleChange (event)} type='text' id="username" placeholder="username"></TextField>
    <TextField margin='normal' onChange={(event) => handleChange (event)} type='password' id="password" placeholder="password"></TextField>
    <Button endIcon={<LoginIcon/>}  type='submit'>Sign in</Button>
    {/* <p> hello</p> */}
    {/* <Typography>Login</Typography>

  </Box> */}
{/* // </form> */} 




      </>
    );
  };
  
  export default Login;