// TODO: answer here
import React, { useState } from "react";
import "../styles/LikeDislikeButton.css"

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
  
  const handleLike = () => {
    // cek like status
    if (likeStatus) {

      if (like > 0) {
        setLike(like - 1);
      }
      setLikeStatus(false);
    } else {
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

    if (dislikeStatus) {

      if (dislike > 0) {
        setDislike(dislike - 1);
      }
      setDislikeStatus(false);

    } else {
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
