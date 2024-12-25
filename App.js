import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("h1",{id:"child"},
        [React.createElement("h1",{},"I'm an H1 TAG"),
        React.createElement("h2",{},"I'm an H2 TAG")]
    )
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);