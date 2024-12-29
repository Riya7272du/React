import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    //Local State Variable - Super powerful variables
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    // Normal JS Variable
    // let listOfRestaurant = [
    //     {
    //         "info": {
    //             "id": "651218",
    //             "name": "McDonald's",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/0c8e1a6e-2cb9-4ac4-a009-8b23769eaf84_651218.JPG",
    //             "locality": "Vishal Cinema",
    //             "areaName": "Rajouri Garden",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "American",
    //                 "Fast Food"
    //             ],
    //             "avgRating": 3.8,
    //             "parentId": "630",
    //             "avgRatingString": "4.5",
    //             "totalRatingsString": "7.6K+",
    //             "deliveryTime": 51,
    //         },
    //     },
    //     {
    //         "info": {
    //             "id": "6512h18",
    //             "name": "Dominos",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/0c8e1a6e-2cb9-4ac4-a009-8b23769eaf84_651218.JPG",
    //             "locality": "Vishal Cinema",
    //             "areaName": "Rajouri Garden",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "American",
    //                 "Fast Food"
    //             ],
    //             "avgRating": 4.5,
    //             "parentId": "630",
    //             "avgRatingString": "4.5",
    //             "totalRatingsString": "7.6K+",
    //             "deliveryTime": 51,
    //         },
    //     }

    // ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    //Filter logic
                    // setListOfRestaurant();
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                    setListOfRestaurant(filteredList);
                    console.log(listOfRestaurant);
                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }

            </div>
        </div >
    )
}

export default Body;