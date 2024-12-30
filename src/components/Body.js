import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {
    //Local State Variable - Super powerful variables
    // const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("");

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
    // ];

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6519&lng=77.131611&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);

            //optional chaining 
            setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    //Conditional Rendering
    // if (listOfRestaurant.length === 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurant.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setfilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>

                </div>

                <button className="filter-btn" onClick={() => {
                    //Filter logic
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                    setListOfRestaurant(filteredList);
                    // console.log(listOfRestaurant);

                }
                }>
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }

            </div>
        </div >
    )
}

export default Body;