import React from "react";

const List = [
    { name: "item1", price: 100 },
    { name: "item2", price: 200 },
    { name: "item3", price: 300 },
    { name: "item4", price: 160 },
    { name: "item5", price: 430 },
];

function Listview() {
    return (
        <div>
            <h1>ListView</h1>
            <ul>
                {List.map((item) => (
                    <li>
                        {item.name}: {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Listview;
