import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text white">
                    Username and Time
                </div>
                <div className="card-body">
                    Post content
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <span> </span>
                    <ReplyButton />
                    <Comment />
                    <Comment />
                </div>
            </div>
        )
    }
}