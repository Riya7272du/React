import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // count: 0,
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "http://dummy-photo"
            }
        }
    }

    async componentDidMount() {
        // console.log("child Component Did Mount");

        const data = await fetch(" https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        // const { count } = this.state;

        return (
            <div className="user-card">
                {/* <h1>Count:{count}</h1> */}
                {/* <buttton className="buttonn" onClick={() => {
                    // NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count increase</buttton> */}
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @riyasinghal</h4>
            </div>
        )
    }
}
export default UserClass;