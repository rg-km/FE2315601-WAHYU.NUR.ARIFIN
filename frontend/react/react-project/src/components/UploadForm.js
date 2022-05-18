import React,{useState} from "react";
import Axios from "axios";

export default function UploadForm({onSubmit}) {
  const url="https://rg-km.riegan.my.id/api/post/create"
  const [data, setData] = useState({
    caption:"Hello World",
    image: null
  });

  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  }

  function submit(e){
    e.preventDefault();
    const formData = new FormData();
    let data1 =  data.indexList;
    data1.map(item => {
      formData.append("content", data.caption);
      formData.append("image", data.image);
    });
    Axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {
      onSubmit();
    })
    .catch(err => {
      console.log(err);
    });
  }
    
    // Axios.post(url,{
    //   caption:data.caption,
    //   image:data.image
    // })
    // .then(res => {
    //   onSubmit(res.data);
    // })
    // .catch(err => console.log(err));
  
  
  

  return (
    <div className="upload-form" aria-label="Upload Form">
      <form onSubmit = {(e)=> submit(e)} >
        <input onChange={(e)=>handleChange(e)} id="caption" value={data.caption} type="text" aria-label="Caption Input" />
        <input onChange={(e)=>handleChange(e)} id="image" value={data.image} type="file" accept="image/png, image/jpg, image/gif" aria-label="Image Input" />
        <button type="submit" aria-label="Submit Button" >Submit</button>
      </form>
    </div>
  )
}