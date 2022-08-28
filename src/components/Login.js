

const Login = ( {handleChange, handleSubmit, error} ) => {
    return (
      <>
    <div className='landing-format'>
      
     <form onSubmit={handleSubmit} className='login-form' >
     <h1 className='login-form-text'>Login</h1>
          <input onChange={(event) => handleChange (event)} type="text" id="username" placeholder="username" />
          <input onChange={(event) => handleChange (event)} type="password" id="password" placeholder="password" />
          <p>{error}</p>
          <button  type='submit'>Sign in</button>
        </form>
     </div>
      </>
    );
  };
  
  export default Login;