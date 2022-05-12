// TODO: answer here
import React, { useState } from "react"
import "../styles/LikeDislikeButton.css"

export default function LikeDislikeButton(props) {
    // TODO: answer here

    const {id, image} = props;
    const [isLiked, setIsLiked] = useState(true);
    const [isDisliked, setIsDisliked] = useState(true);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    return(
        <div className="post">
            {/* <div className="image-url">
                <p>{image}http://blank</p>
            </div> */}
            <div className="likedislike">
                <button 
                    aria-label = "Like Button"
                    onClick = {() => {
                        if (isLiked) {
                            setIsLiked(false);
                            setIsDisliked(true);
                            setLikeCount(likeCount + 1);
                        } else {
                            setIsLiked(true);
                            setIsDisliked(false);
                            setLikeCount(likeCount - 1);
                        }
                    }}
                >Like  
                </button>
                <input
                    type="text"
                    aria-label = "Like Count"
                    value = {likeCount}
                    disabled
                ></input>

                <button
                    aria-label = "Dislike Button"
                    onClick = {() => {
                        if (isDisliked) {
                            setIsDisliked(false);
                            setIsLiked(true);
                            setDislikeCount(dislikeCount + 1);
                        } else {
                            setIsDisliked(true);
                            setIsLiked(false);
                            setDislikeCount(dislikeCount - 1);
                        }
                        
                    }}
                >Dislike
                </button>
                <input
                    type="text"
                    aria-label = "Dislike Count"
                    value = {dislikeCount}
                    disabled
                ></input>
            </div>
        </div>
    );

}