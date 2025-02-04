import { addItem, removeItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const ItemList = ({ items, showRemoveButton = false }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <div
                        key={item.card.info.id}
                        className="p-2 m-2 border-gray-300 border-b-2 text-left flex"
                    >
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span>
                                    {" "}
                                    - ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                                </span>
                            </div>
                            <div>
                                <p className="text-xs">{item.card.info.description}</p>
                            </div>
                        </div>
                        <div className="w-3/12 p-4">
                            <div>
                                <div className="absolute">
                                    <button
                                        className="p-2 bg-black shadow-lg rounded-lg mx-2 text-white"
                                        onClick={() => handleAddItem(item)}
                                    >
                                        Add +
                                    </button>
                                    {showRemoveButton && (
                                        <button
                                            className="p-2 bg-red-600 shadow-lg rounded-lg mx-2 text-white"
                                            onClick={() => handleRemoveItem(item)}
                                        >
                                            Remove -
                                        </button>
                                    )}
                                </div>
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    className="w-full"
                                ></img>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
