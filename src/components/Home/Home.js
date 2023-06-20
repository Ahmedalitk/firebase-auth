import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import {useSignOut} from 'react-firebase-hooks/auth'


function Home(props) {
  const [signOut,loading,error] = useSignOut(auth)

  function logout(){
    signOut()
  }
 
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>

        <Link  onClick={logout} to='/login'>Logout</Link>
        
      </div>

      <br />
      <br />
      <br />

      <h2 style={{color: "white"}}>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
