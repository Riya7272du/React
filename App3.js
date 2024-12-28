import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
   -logo
   -Nav-Items
Body
   -Search
   -RestaurantContainer
      -RestaurantCard
        -img
        -Name of Res,Star Rating,cuisine
Footer
   -Copyright
   -Links
   -Address
   -Contact        
*/


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&s"></img>
            </div>
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="food-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3Z-lgQ4xwFFFSRRyEO34mZ8qaS4T6-jdeA&s"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}




const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard
                    resName="Meghna Foods"
                    cuisine="Food Salad, Indian, Asian"
                />
                <RestaurantCard
                    resName="MacDonalds"
                    cuisine="Burger, Fast Food"
                />
                {/* <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> */}
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)