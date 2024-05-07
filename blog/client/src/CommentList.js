import React from 'react';

export default ({ comments }) => {

    const renderedComments = comments.map(comment => {
        return <li key={comment.id} className="list-group-item">{comment.content}</li>
    });
    return <ul>
        {renderedComments}
    </ul>
}