import React from "react";
import reactDom from "react-dom";
import "./index.css";
import NavBar from "./navbar";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";
import { db } from "../firebase";
import { useEffect, useState } from "react";


function Table() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("ticket").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

 
  return (
    <div>
      <NavBar />
      <div className="overflow-x-auto">
        <div className=" min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <p className="text-3xl">Tickets</p>
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <TableHeader />
                {posts.map((nm) => (
                  <TableRow
                    username={nm.username}
                    product={nm.product}
                    code={nm.code}
                    domain={nm.domain}
                    body={nm.body}
                  />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
