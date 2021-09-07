import React from "react";
import reactDom from "react-dom";
import "./index.css";



function TableHeader()
{
    return(
        <thead>
        <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
          <th className="py-3 px-6 text-left">Username</th>
          <th className="py-3 px-6 text-left">Product</th>
          <th className="py-3 px-6 text-left">Product Code</th>
          <th className="py-3 px-6 text-left">Domain</th>
          <th className="py-3 px-6 text-left">Ticket Body</th>
        </tr>
      </thead>
    )
}

export default TableHeader;
