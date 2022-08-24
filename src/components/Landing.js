import {Link} from 'react-router-dom'
import { Box,Typography,TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LandingNav = ( {handleChange, handleSubmit, signIn} ) => {
    return (
      <>
      <div className='landing-format'>

     <form onSubmit={handleSubmit} >
        <label htmlFor="username">username</label>
          <input onChange={(event) => handleChange (event)} type="text" id="username" placeholder="username" />
          <label htmlFor="password">Password</label>
          <input onChange={(event) => handleChange (event)} type="password" id="password" placeholder="password" />
          <p><span>User name and password should match.</span></p>
          <button>Login</button>
          <p className='create-account'><Link to='/SignUp'>Create an Account</Link></p>
          <Button endIcon={<LoginIcon/>}  type='submit'>Sign in</Button>
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
  
  export default LandingNav;