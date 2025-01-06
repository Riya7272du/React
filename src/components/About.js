import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h1>About</h1>
                <h1>This is Namaste React Web Series</h1>
                {/* <User name={"Riya Singhal(Function)"} /> */}

                <UserClass name={"Riya Singhal(Class)"} location={"Delhi"} />
            </div>
        )
    }
}
export default About;