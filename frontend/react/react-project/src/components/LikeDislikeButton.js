// TODO: answer here
import React, { useState } from "react"
import "../styles/LikeDislikeButton.css"

export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {
    // TODO: answer here

    const [isLikedState, setIsLikedState] = useState(isLiked);
    const [isDislikedState, setIsDislikedState] = useState(isDisliked);
    const [likeCountState, setLikeCountState] = useState();
    const [dislikeCountState, setDislikeCountState] = useState(dislikeCount);

    return(
        <div className="post">
            {/* <div className="image-url">
                <p>{image}http://blank</p>
            </div> */}
            <div className="likedislike">
                <button 
                    aria-label = "Like Button"
                    onClick = {() => {
                        if (isLikedState) {
                            setIsLikedState(false);
                            setLikeCountState(likeCountState - 1);
                        } else {
                            setIsLikedState(true);
                            setLikeCountState(likeCountState + 1);
                        }
                    }}
                >Like  
                </button>
                <input
                    type="text"
                    aria-label = "Like Count"
                    value = {likeCountState}
                    disabled
                ></input>

                <button
                    aria-label = "Dislike Button"
                    onClick = {() => {
                        if (isDislikedState) {
                            setIsDislikedState(false);
                            setDislikeCountState(dislikeCountState - 1);
                        } else {
                            setIsDislikedState(true);
                            setDislikeCountState(dislikeCountState + 1);
                        }
                        
                    }}
                >Dislike
                </button>
                <input
                    type="text"
                    aria-label = "Dislike Count"
                    value = {dislikeCountState}
                    disabled
                ></input>
            </div>
        </div>
    );

}