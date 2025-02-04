import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setshowIndex }) => {
    // console.log(data);
    // const [showItems, setshowItems] = useState(false);
    const handleClick = () => {
        // console.log("Clicked on:", data.title);
        setshowIndex()
    };

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 " >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>{showItems ? "🡹" : "🡻"}</span>
                </div>
                {showItems && < ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default ResCategory;