import React from "react";
import reactDom from "react-dom";
import "./index.css";

function TableRow(props)
{
    return (
        <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <p className="font-medium">{props.username}</p>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <p className="font-medium">{props.product}</p>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <p className="font-medium">{props.code}</p>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <p className="font-medium">{props.domain}</p>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {/* <p className="font-medium"><a className="text-blue-600" href="">Click Here</a></p> */}
                      <p className="font-medium">{props.body}</p>
                    </td>
                  </tr>
                </tbody>
    )
}

export default TableRow;