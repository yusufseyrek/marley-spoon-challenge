import React, { useEffect, useState } from "react";

import ListView from "./ListView";
import DetailsView from "./DetailsView";
import { fetchRecipes } from "../utils/api";

function MasterView() {
    const [recipes, setRecipes] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        (async function () {
            const recipesResponse = await fetchRecipes();
            setRecipes(recipesResponse);
        })();
    }, []);

    return (
        <div className="masterView">
            <ListView {...{ recipes, selectedIndex, setSelectedIndex }} />
            <DetailsView selectedRecipe={recipes[selectedIndex]} />
        </div>
    );
}

export default MasterView;
