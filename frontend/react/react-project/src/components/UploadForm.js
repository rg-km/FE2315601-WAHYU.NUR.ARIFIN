import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_URL } from "../api/config" 

export default function UploadForm({ onSubmit }) {
  // const url = "https://rg-km.riegan.my.id/api/post/create";
  const [data, setData] = useState({
    caption: "",
    image: null
  });

  function handleCaptionChange(e) {
    setData({ ...data, caption: e.target.value });
  }

  function handleFileChange(e) {
    setData({ ...data, image: e.target.files[0] });
  }

  async function createPost(data) {
    try {
      const postData = await Axios.post(`${API_URL}/post/create`, data, { withCredentials: true });
      if (postData?.message == "success") {
        return postData;
      }
    } catch (error) {
      console.log("can't create post", error);
    }
  }

  function submit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image", data.image);
    formData.append("content", data.caption);

    createPost(formData);
  }

  return (
    <div className="upload-form" aria-label="Upload Form">
      <form onSubmit={(e) => submit(e)}>
        <h3>input</h3>
        <input
          onChange={(e) => handleCaptionChange(e)}
          id="caption"
          value={data.caption}
          type="text"
          aria-label="Caption Input"
        />
        <h3>image</h3>
        <input
          onChange={(e) => handleFileChange(e)}
          id="image"
          type="file"
          accept="image/png, image/jpg, image/gif"
          aria-label="Image Input"
        />
        <button type="submit" aria-label="Submit Button">
          Submit
        </button>
      </form>
    </div>
  );
}
