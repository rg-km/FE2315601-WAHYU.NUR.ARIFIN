// TODO: answer here
import React, { useState } from "react"
import "../styles/PostCard.css"
import LikeDislikeButton from "./LikeDislikeButton"


export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
  
  return (
    <div className="card-container" aria-label="Post Card">
      <div className="card-image">
        <img src={image} alt="post-image" aria-label="Post Image" />
      </div>

      <div className="card-content">
        <div className="card-like">
          <LikeDislikeButton/>
        </div>

        <div className="card-username" aria-label="Post User Name">
          <span>{username} wahyunurarifin</span>
        </div>

        <div className="card-date" aria-label="Post Date">
          <span>{date} 11 Mei 2022</span>
        </div>

        <div className="card-caption" aria-label="Post Caption">
          <span>{caption} Aku seorang manusia yang mengembara di bumi ini hehe, mencari kitab suci menuju ke barat</span>
        </div>  
      </div>
    </div>
  )
}
