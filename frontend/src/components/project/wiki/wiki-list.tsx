import React from "react";

const List: React.FC<{ items: string[] }> = ({ items }) => (
    <ul className="list-disc list-inside space-y-2 text-md md:text-lg text-gray-600">
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

export default List;
