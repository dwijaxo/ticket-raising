import React from "react";
import "./index.css";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { db } from "../firebase";

function RaiseTicketForm() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  //   useEffect(() => {
  //     // console.log(editorState);
  //     // console.log(editorState.getCurrentContent().getPlainText("\u0001"));
  //     const ticketBody = editorState.getCurrentContent().getPlainText("\u0001");
  //   }, [editorState]);
  //   console.log(editorState.getCurrentContent());
  const [formData, setFormData] = useState({
    username: "",
    product: "",
    code: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const [loader, setLoader] = useState(false);
  const ticketBody = editorState.getCurrentContent().getPlainText("\u0001");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("ticket")
      .add({
        username: formData.username,
        product: formData.product,
        code: formData.code,
        body: ticketBody,
      })
      .then(() => {
        setLoader(false);
        alert("Your Ticket has been Submitted!");
      })
      .catch((error) => {
        setLoader(false);
      });
    setFormData("");
  };

  return (
    <div className="form-border md:container md:mx-auto pt-16">
      <p className="text-3xl"> Raise A Ticket</p>
      <form onSubmit={handleSubmit} action="" className="form">
        <div className="departhment pt-6">
          <label
            htmlFor="department-label"
            className="form-label text-lg text-gray-600"
          >
            Enter your Department
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            value={formData.username}
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            className="form-input mt-2 w-11/12 border-2 rounded p-2"
          />
        </div>
        <div className="departhment pt-6">
          <label
            htmlFor="department-label"
            className="form-label text-lg text-gray-600"
          >
            Product
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            value={formData.product}
            type="text"
            id="product-name"
            placeholder="Product"
            name="product"
            className="form-input mt-2 w-11/12 border-2 rounded p-2"
          />
        </div>
        <div className="departhment pt-6">
          <label
            htmlFor="department-label"
            className="form-label text-lg text-gray-600"
          >
            Product Code
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            value={formData.code}
            type="text"
            id="code"
            placeholder="Product Code"
            name="code"
            className="form-input mt-2 w-11/12 border-2 rounded p-2"
          />
        </div>
        <div className="md:container md:mx-auto mt-10">
          <p className="text-lg text-gray-600 pb-4">Ticket Body</p>
          <div
            style={{
              border: "1px solid grey",
              padding: "2px",
              minHeight: "400px",
            }}
          >
            <Editor
              editorState={editorState}
              //onChange={setEditorState}
              onEditorStateChange={setEditorState}
            />
          </div>
          <div className="pt-6 pb-10">
            <button
              type="submit"
              className="bg-indigo-900 text-white pt-3 pb-3 pr-6 pl-6 rounded hover:bg-indigo-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RaiseTicketForm;
