// TODO: answer here
// TODO: answer here
import React from "react";
import LikeDislikeButton from "./LikeDislikeButton";
import "../styles/PostCard.css";

export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here

  return (
    <div className="row">
    <div className="card-container" aria-label="Post Card">

      <div className="card-image">
        <img src={image} alt="post-image" aria-label="Post Image" />
      </div>

      <div className="card-content">
        <div className="card-like" aria-label="">
          <LikeDislikeButton
            likeCount={0}
            dislikeCount={0}
            isLiked={true}
            isDisliked={false}
          />
        </div>

        <div className="card-username" aria-label="Post User Name">
          {username}
        </div>

        <div className="card-date" aria-label="Post Date">
          {date}
        </div>

        <div className="card-caption" aria-label="Post Caption">
          {caption}
        </div>
      </div>
    </div>
    </div>
  );
}
