import React from "react";
import Comment from "./Comment";
// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"황수하"} comment={"안녕하세요 수하입니다"}/>
//             <Comment name ={"유재석"} comment = {"리액트 재미있어요 ~ "}/>
//         </div>
//     );
// }

const comments = [
    {
        name: "황수하",
        comment: "안녕하세요 수하입니다  ",
    },
    {
        name: "황성하",
        comment: "안녕하세요 성하입니다  ",
    },
    {
        name: "황준하",
        comment: "안녕하세요 준하입니다  ",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name ={comment.name } comment={comment.comment}/>
                );
            })}
        </div>
    )
}


export default CommentList;