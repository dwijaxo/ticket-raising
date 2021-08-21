// import React, { useEffect, useState } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import RaiseTicketForm from "./raiseTicketForm";

// export default function App() {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
//   );
//   useEffect(() => {
//     console.log(editorState);
//   }, [editorState]);
//   return (
//     <div className="md:container md:mx-auto mt-10">
//         <p className="text-lg text-gray-600 pb-4">Ticket Body</p>
//       <div style={{ border: "1px solid grey", padding: '2px', minHeight: '400px' }}>
//         <Editor
//           editorState={editorState}
//           onEditorStateChange={setEditorState}
//         />
//       </div>
//       <div className="pt-6 pb-10">
//       <button type="submit" className="bg-indigo-900 text-white pt-3 pb-3 pr-6 pl-6 rounded hover:bg-indigo-800">Submit</button>
//       </div>
//     </div>
//   );
// }