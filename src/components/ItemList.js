const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div>
            <ul>
                {items.map(item => <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</span>
                    </div>
                    <div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                </div>)}
            </ul>
        </div>
    )
}
export default ItemList;