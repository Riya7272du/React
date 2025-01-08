import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    //Local State Variable - Super powerful variables
    // const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // console.log(listOfRestaurant);

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

    useEffect(() => {
        fetchData()
    }, []);


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

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <h1>Looks like you're offline!! Please check your Internet Connectivity.</h1>
        )
    };


    //Conditional Rendering
    // if (listOfRestaurant.length === 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
                <div className="search m-4 p-4 flex items-center">
                    <button className="filter-btn px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                        //Filter logic
                        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                        setfilteredRestaurant(filteredList);


                    }
                    }>
                        Top Rated Restaurants</button>
                </div>

            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}>
                            {restaurant.info.isOpen ? (
                                <RestaurantCardPromoted resData={restaurant} />) :
                                (<RestaurantCard resData={restaurant} />)
                            }
                        </Link>)
                    )
                }

            </div>
        </div >
    )
}

export default Body;