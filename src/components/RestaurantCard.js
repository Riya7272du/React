import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-200 hover:bg-gray-400" >
            <img className="res-logo rounded-lg" alt="food-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{resData.info.locality}</h4> */}
        </div >
    )
}
export default RestaurantCard;