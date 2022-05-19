// TODO: answer here
import React, { useState } from "react";
import "../styles/LikeDislikeButton.css"
import axios from "axios";
import { API_URL } from "../api/config"

export default function LikeDislikeButton({
  id,
  isLiked = false,
  isDisliked = 0,
  likeCount = 0,
  dislikeCount
}) {
  // TODO: answer here
  const [like, setLike] = useState(likeCount);
  const [dislike, setDislike] = useState(dislikeCount);
  const [likeStatus, setLikeStatus] = useState(isLiked);
  const [dislikeStatus, setDislikeStatus] = useState(isDisliked);

  const urllike = `${API_URL}/post/123/like`;
  const urldislike = `${API_URL}/post/123/dislike`;
  const urlunlike = `${API_URL}/post/123/unlike`;
  const urlundislike = `${API_URL}/post/123/undislike`;
  
  const handleLike = () => {
    // cek like status
    async function likepost(data) {
      try {
        const likepost = await axios.get(urllike, { withCredentials: true });
        if (likepost?.message == "success") {
          return likepost;
        }
      } catch (error) {
        console.log("can't create post", error);
      }
    }
    
    async function unlikepost(data) {
      try {
        const unlikepost = await axios.get(urlunlike, { withCredentials: true });
        if (unlikepost?.message == "success") {
          return unlikepost;
        }
      } catch (error) {
        console.log("can't create post", error);
      }
    }
    
    if (likeStatus) {
      unlikepost()
      if (like > 0) {
        setLike(like - 1);

      }
      setLikeStatus(false);
    } else {
      likepost();
      setLike(like + 1);
      setLikeStatus(true);
    }

    if (dislikeStatus) {
      setDislikeStatus(false);
      setDislike(dislike - 1);
    }
  };

  const handleDislike = () => {
    // cek like status
    async function dislikepost(data) {
      try {
        const dislikepost = await axios.get(urldislike, { withCredentials: true });
        if (dislikepost?.message == "success") {
          return dislikepost;
        }
      } catch (error) {
        console.log("can't create post", error);
      }
    }
    
    async function undislikepost(data) {
      try {
        const undislikepost = await axios.get(urlundislike, { withCredentials: true });
        if (undislikepost?.message == "success") {
          return undislikepost;
        }
      } catch (error) {
        console.log("can't create post", error);
      }
    }

    if (dislikeStatus) {
      undislikepost()
      if (dislike > 0) {
        setDislike(dislike - 1);
      }
      setDislikeStatus(false);

    } else {
      dislikepost();
      setDislike(dislike + 1);
      setDislikeStatus(true);
    }

    if (likeStatus) {
      setLikeStatus(false);
      setLike(like - 1);
    }
  };

  return (
    <div>
      <button aria-label="Like Button" onClick={handleLike}>
        {likeStatus ? "unlike" : "like"}
      </button>
      <p aria-label="Like Count">{like}</p>

      <button aria-label="Dislike Button" onClick={handleDislike}>
        {dislikeStatus ? "undislike" : "dislike"}
      </button>
      <p aria-label="Dislike Count">{dislike}</p>
    </div>
  );
}
