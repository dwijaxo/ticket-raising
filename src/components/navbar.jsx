import React from "react";
import "./index.css";
// import { signOut } from "firebase/compat/auth";
// import firebase from "firebase/app";
// import "firebase/auth";
import {auth} from "../firebase";
// import { useAuth } from "../contexts/AuthContext";
// import { FirebaseContext } from "../contexts/FirebaseContext";
// import { useContext } from "react";
import {useHistory} from "react-router-dom";

function NavBar() {

    const history = useHistory();
  // const Auth = firebase.auth();
  const handleClick = () => {
    auth.signOut().then(() =>{
      history.push("/")
    }).catch((error) => {
      alert("Error!")
    });
  }
  

  return (
    <div className="bg-indigo-900">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="block lg:hidden">
          {/* <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button> */}
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className=" text-right text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="  block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4 "
              onClick={handleClick}
            >
              Log out
            </a>
            {/* <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
            >
              Blog
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
