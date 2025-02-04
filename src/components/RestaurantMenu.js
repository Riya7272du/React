import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setshowIndex] = useState(null);
    if (resInfo === 0) return <Shimmer />
    // console.log(resInfo);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name || "Restaurant Name"}</h1>
            <p className="font-bold my-4 text-xl">{cuisines?.join(", ") || "Cuisines not available"}</p>
            {Array.isArray(categories) && categories.length > 0 ? (
                categories.map((category, index) => (
                    //controlled components
                    <ResCategory
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setshowIndex={() => setshowIndex(index)}
                    />

                ))
            ) : (
                <p>No categories available</p>
            )}
        </div>

    )
}

export default RestaurantMenu; 