import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(2);

    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: Delhi</h3>
            <h4>Contact: @riyasinghal</h4>
        </div>
    )
}
export default User;