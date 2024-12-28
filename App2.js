import React from "react";
import ReactDOM from "react-dom/client";

//core react
// const heading=React.createElement("h1",{id:"heading"},"Namaste React"); 

// jsx React Element
// const jsxHeading = (
//     <h1 id="heading">
//         Namaste JSX react
//     </h1>
// );

const Title = () => (
    <h1 id="heading">
        Namaste JSX React
    </h1>
);

//functional component
const HeadingComponent = () => {
    return <div id="container">
        <Title />
        <h1 className="head">namaste jsx functional</h1>
    </div>
}


//inserting javascript in component using {} 
var x = 10000;
const HeadingComponent2 = () => {
    return <div id="container">
        <Title />
        {/* one more way to call Title */}
        {Title()}
        {x}
        <h1>{100 + 200}</h1>
        <h1 className="head">namaste jsx functional</h1>
    </div>
}

const jsxHeading = (
    <h1 id="heading">
        Namaste JSX react
        <HeadingComponent2 />
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);