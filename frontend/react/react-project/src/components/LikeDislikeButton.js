// TODO: answer here
import React, { useState } from "react"
import "../styles/LikeDislikeButton.css"

export default function LikeDislikeButton(id, isLiked, isDisliked, likeCount, dislikeCount) {
    // TODO: answer here
    const [like, setLike] = useState(likeCount);
    const [dislike, setDislike] = useState(dislikeCount);
    const [likeStatus, setLikeStatus] = useState(isLiked);
    const [dislikeStatus, setDislikeStatus] = useState(isDisliked);
    

    const handleLike = () => {
        setLikeStatus((curr) => (!curr));
        if (likeStatus) {
            return setLike(like - 1);
        } 
        setLike(like + 1);
        setDislike(dislike - 1);
    };

    const handleDislike = () => {
        setDislikeStatus((curr) => (!curr));
        if (dislikeStatus) {
            return setDislike(dislike - 1);
        }
        setLike(like - 1);
        setDislike(dislike + 1);
        
    };

    return(
        <div>
            <button aria-label="Like Button" onClick={handleLike}>
                {likeStatus ? "like" : "unlike"}
            </button>
            <input
                aria-label="Like Count"
                type="text"
                value={like}
            ></input>

            <button aria-label="Dislike Button" onClick={handleDislike}>
                {dislikeCount ? "dislike" : "undislike"}
            </button>
            <input
                aria-label="Dislike Count"
                type="text"
                value={dislike}
            ></input>

        </div>
    );

}