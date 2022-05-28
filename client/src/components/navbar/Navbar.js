import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";
import { logout } from "../helpers/auth";
import { useSelector } from "react-redux";
function Navbar({ history }) {
  const [click, setClick] = useState(false);
  // const { users } = useSelector((state) => state.user);

  const handleLogout = (e) => {
    logout(() => {
      history.push("/signin");
    });
  };
  return (
    <nav className="navbar">
      {/* <Link to ="/"> */}
      <div className="nav-logo">
        <img src="../../../img/UNC_LOGO.png" alt="UNC" />
      </div>
      {/* </Link> */}

      <ul
        className={click ? "nav-menu" : "nav-links"}
        onClick={() => setClick(false)}
      >
        {/* <Link to="/" className="home text-decoration-none">
          <li>{isAuthenticated().username}</li>
        </Link> */}

        <Link to="/" className="home text-decoration-none link-light">
          <li>Home</li>
        </Link>
        {/* <Link to = '/reservation' className="reservation">
                    <li>Reservation</li>
            </Link> */}

        {!isAuthenticated() && (
          <>
            {/* <Link to = '/about' className="about text-decoration-none ">
                                <li>About</li>
                        </Link> */}

            <Link
              to="/signin"
              className="about text-decoration-none link-light"
            >
              <li>Login</li>
            </Link>

            <Link
              to="/signup"
              className="about text-decoration-none link-light"
            >
              <li>Register</li>
            </Link>
          </>
        )}

        <Link to="/contact" className="contact text-decoration-none link-light">
          <li>Contact Us</li>
        </Link>

        {/* show user dashboard */}
        {isAuthenticated() && isAuthenticated().role === 0 && (
          <>
            {/* {username} */}
            <Link
              to="/user/dashboard"
              className="contact text-decoration-none link-light"
            >
              {/* <p>Event Organizer</p> */}
              {/* <br /> */}
              <li>Dashboard</li>
              <p className="p-tag">
                Event Org <br />
                {isAuthenticated().username}
              </p>
            </Link>

            {/* <Link
                to={`/user/account/${users._id}`}
                // to={"/user/account/"}
                className="text-white text-decoration-none"
              >
                {users.username} <p>Mel</p>
                <br />
                
              </Link> */}
          </>
        )}

        {/* show admin dashboard */}
        {isAuthenticated() && isAuthenticated().role === 1 && (
          <>
            <Link
              to="/maintenance/dashboard"
              className="contact text-decoration-none link-light"
            >
              <li>Dashboard</li>
              <p className="p-tag">
                Maintenance <br />
                {isAuthenticated().username}
              </p>
            </Link>
          </>
        )}

        {/* approval */}
        {isAuthenticated() && isAuthenticated().role === 2 && (
          <>
            <Link
              to="/approval/dashboard"
              className="contact text-decoration-none link-light"
            >
              <li>Dashboard</li>
              <p className="p-tag">
                Approver <br />
                {isAuthenticated().username}
              </p>
            </Link>
          </>
        )}

        {isAuthenticated() && isAuthenticated().role === 3 && (
          <>
            <Link
              to="/imc/dashboard"
              className="contact text-decoration-none link-light"
            >
              <li>Dashboard</li>
              <p className="p-tag">
                IMC <br />
                {isAuthenticated().username}
              </p>
            </Link>
          </>
        )}

        {isAuthenticated() && isAuthenticated().role === 4 && (
          <>
            <Link
              to="/ict/dashboard"
              className="contact text-decoration-none link-light"
            >
              <li>Dashboard</li>
              <p className="p-tag">
                ICT <br />
                {isAuthenticated().username}
              </p>
            </Link>
          </>
        )}
        {isAuthenticated() && isAuthenticated().role === 5 && (
          <>
            <Link
              to="/vpa/dashboard"
              className="contact text-decoration-none link-light"
            >
              <li>Dashboard</li>
              <p className="p-tag">
                VPA <br />
                {isAuthenticated().username}
              </p>
            </Link>
          </>
        )}

        {/* logout */}
        {isAuthenticated() && (
          <>
            <li
              className="contact text-decoration-nonelink-light"
              onClick={handleLogout}
            >
              Logout
            </li>
          </>
        )}
      </ul>
      {/* mobile menu */}
      <button className="menu-icon" onClick={() => setClick(!click)}>
        {click ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
    // <nav className="navbar">
    //     {/* <Link to ="/"> */}
    //         <div className="nav-logo">
    //             <img src="./img/UNC_LOGO.png" alt="" />
    //         </div>
    //     {/* </Link> */}

    //     <ul className={click ? "nav-menu" : "nav-links"}
    //         onClick={() => setClick(false)}
    //     >
    //     <Link to = '/' className="home text-decoration-none">
    //             <li>Home</li>
    //     </Link>
    //     {/* <Link to = '/reservation' className="reservation">
    //             <li>Reservation</li>
    //     </Link> */}

    //     <Link to = '/contact' className="contact text-decoration-none">
    //             <li>Contact Us</li>
    //     </Link>

    //     <Link to = '/about' className="about text-decoration-none ">
    //             <li>About</li>
    //     </Link>

    //     <Link to = '/signin' className="about text-decoration-none ">
    //             <li>Signin</li>
    //     </Link>

    //     <Link to = '/signup' className="about text-decoration-none ">
    //             <li>Signup</li>
    //     </Link>
    //     </ul>
    //     {/* mobile menu */}
    //     <button className="menu-icon"
    //     onClick={() => setClick(!click)}>
    //     {click ? <FaTimes/> : <FaBars/>}
    //     </button>
    // </nav>
  );
}

export default withRouter(Navbar);
