import User from "./User";
import UserClass from "./UserClass";
import React from "react";

import UserContext from "./utils/Usercontext";

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
                <div>LoggedIn User
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                {/* <User name={"Riya Singhal(Function)"} /> */}

                <UserClass name={"Riya Singhal(Class)"} location={"Delhi"} />
            </div>
        )
    }
}
export default About;