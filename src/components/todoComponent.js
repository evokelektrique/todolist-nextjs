"use client"

import { useState } from "react";

export default function TodoComponent({ todo }) {

    const [showMore, setShowMore] = useState(false);

    function handleShowMore() {
        setShowMore(!showMore);
    }

    return (
        <div className="card mb-3 p-3 is-rounded">
            {/* id */}
            <span className="mr-2">
                #{todo.id}
            </span>

            {/* Status */}
            <span className={todo.complete ? "has-text-success" : "has-text-danger"}>
                {todo.complete ? "Complete" : "Draft"}
            </span>

            {/* Content */}
            <span className="ml-2 is-size-6">
                {showMore ? todo.content : todo.content.substring(0, 100) + '...'}

                {/* Show more and less */}
                <button className="button is-small ml-2 is-rounded" onClick={handleShowMore}>Show more</button>
            </span>
        </div>
    );
}