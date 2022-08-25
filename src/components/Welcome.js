import { Link } from "react-router-dom";
import logo from "../images/black-logo.png";

const Welcome = () => {
  return (
    <>
      <div className="welcome-page">
        <img src={logo} className="logo-dark-mode" />
        <h2 className="hello">Hello!</h2>
        <p className="landing-text">
          Welcome to fix it my new service web application!
        </p>
        <div className="login-signup">
          <p><Link to='/login' className="login-welcome">Login</Link></p>
          <p><Link to='/signup' className="signup-welcome">Sign up</Link></p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
