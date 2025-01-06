import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === 0) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
    // console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name || "Restaurant Name"}</h1>
            <h3>{cuisines?.join(", ") || "Cuisines not available"}</h3>
            <h3>{costForTwoMessage || "Cost details not available"}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.length > 0 ? (
                    itemCards.map((item) => (
                        <li key={item?.card?.info?.id}>
                            {item?.card?.info?.name || "Unnamed Item"} - ₹{(item?.card?.info?.price || 0) / 100}
                        </li>
                    ))
                ) : (
                    <li>No menu items available</li>
                )}
            </ul>

        </div>
    )
}

export default RestaurantMenu; 