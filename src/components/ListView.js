import React from "react";

function ListView({ recipes, selectedIndex, setSelectedIndex }) {
    return (
        <div className="listView">
            {recipes.map(({ title, photo }, index) => (
                <li
                    className={`listViewItem ${
                        selectedIndex === index && "selected"
                    }`}
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                >
                    <img alt="" className="listViewItemImage" src={photo} />
                    <span className="listViewItemTitle">{title}</span>
                </li>
            ))}
        </div>
    );
}

export default ListView;
