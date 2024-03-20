import { useState } from "react";
import axios from "axios";
import { Blog } from "../model/blog.model";

const AddBlog = ({
  handlePopupClose,
  blog,
}: {
  handlePopupClose: () => void;
  blog?: Blog;
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [imageLink, setImageLink] = useState("");

  //editing existing blog
  const handleEdit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      let editedData: Partial<any> = {}; // Partial type ensures all properties are optional

      // Check each field and add to editedData if changed
      if (title.trim() != "") {
        editedData = { ...editedData, title: title };
      }
      if (body.trim() != "") {
        editedData = { ...editedData, body: body };
      }

      if (postedBy.trim() != "") {
        editedData = { ...editedData, postedBy: postedBy };
      }
      if (imageLink.trim() != "") {
        editedData = { ...editedData, image: imageLink };
      }

      // Only make the request if there are changes

      const response = await axios.patch(
        `https://nextapi-5d5b.onrender.com/blog/${blog?._id}`,
        editedData
      );
      if (response.status == 200) {
        console.log("Edited successfully");
      } else {
        console.log("Failed to edit");
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      handlePopupClose();
      window.location.reload();
    }
  };

  //adding new blog
  const handleAdd = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      let addData: Partial<any> = {}; // Partial type ensures all properties are optional

      // Check each field and add to editedData if changed
      if (title.trim() != "") {
        addData = { ...addData, title: title };
      }
      if (body.trim() != "") {
        addData = { ...addData, body: body };
      }

      if (postedBy.trim() != "") {
        addData = { ...addData, postedBy: postedBy };
      }
      if (imageLink.trim() != "") {
        addData = { ...addData, image: imageLink };
      }
      const response = await axios.post(
        "https://nextapi-5d5b.onrender.com/blog",
        addData
      );
      console.log(response);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      console.log("added");
      handlePopupClose();
      window.location.reload();
    }
  };
  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-90 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full  justify-center p-4 text-center items-center sm:p-0">
          <div className="relative transform overflow-hidden x bg-white text-left shadow-xl w-full rounded-lg transition-all  sm:w-full sm:max-w-lg">
            <p className="text-xl py-6 bg-gray-200 text-gray-700 font-semibold text-center">
              {blog ? "Edit" : "Add New"} Blog
            </p>
            <form onSubmit={!blog ? handleAdd : handleEdit}>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-8 sm:pb-0">
                <div className=""></div>
                <div className="w-full  grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6 lg:mt-7">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-gray-800 text-base font-semibold leading-tight tracking-normal"
                    >
                      Title
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="off"
                      name="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder={blog ? blog.title : "Enter Title"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="text-gray-800 text-base font-semibold leading-tight tracking-normal"
                    >
                      Body
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="off"
                      name="Body"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder={blog ? blog.body : "Enter Body"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="text-gray-800 text-base font-semibold leading-tight tracking-normal"
                    >
                      Author
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="off"
                      name="postedBy"
                      value={postedBy}
                      onChange={(e) => setPostedBy(e.target.value)}
                      className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder={blog ? blog?.postedBy : "Posted By"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="text-gray-800 text-base font-semibold leading-tight tracking-normal"
                    >
                      Image Link
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="off"
                      name="imageLink"
                      value={imageLink}
                      onChange={(e) => setImageLink(e.target.value)}
                      className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder={blog ? blog?.image : "Enter Image Link"}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full  px-4 gap-x-6 py-10 sm:flex sm:flex-row sm:px-6 ">
                <button
                  type="submit"
                  className="block w-full cursor-pointer rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handlePopupClose();
                  }}
                  className="block w-full rounded px-8 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring focus:ring-blue-500 active:text-blue-500 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
