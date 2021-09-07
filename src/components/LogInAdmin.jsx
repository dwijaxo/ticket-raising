import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FirebaseContext } from "../contexts/FirebaseContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function LogInAdmin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const auth = useAuth();

  return (
    <div className="bg-grey-100 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full m-4">
          <h1 className="text-center text-3xl mb-8">Log In</h1>
          <p className="text-center mb-4 bg-indigo-100">Admin</p>

          <form
          onSubmit={(event) => {
            // alert("hi");
            event.preventDefault();
            firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => history.push("/admin"))
              .catch((error) => alert(error.message));
            setEmail("");
            setPassword("");
          }}>
            <input
              type="email"
              className="block border-2 border-indigo-100 focus:border-indigo-500 w-full p-3 rounded mb-4"
              name="Email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              className="block  border-2 border-indigo-100 focus:border-indigo-500 w-full p-3 rounded mb-4"
              name="Password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* <input
              type="text"
              className="block  border-2 border-indigo-100 focus:border-indigo-500 w-full p-3 rounded mb-4"
              name="Domain"
              placeholder="Tech/Design/Finance"
            /> */}
            <button
              type="submit"
              className="w-full rounded py-3 text-center bg-indigo-900 text-white hover:bg-indigo-800 my-1"
            >
              Submit
            </button>
          </form>
          <div className="text-grey-dark mt-6">
            Do not have an account?
            <Link
              to={"/"}
              className="no-underline border-b border-indigo-900 text-indigo-900"
            >
              Sign Up
            </Link>
            {/* <a
              className="no-underline border-b border-indigo-900 text-indigo-900"
              href="../login/"
            >
              Sign up
            </a> */}
            .
          </div>
        </div>
      </div>
    </div>
  );
}
