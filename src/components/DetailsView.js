import React from "react";

function DetailsView({ selectedRecipe }) {
    if (!selectedRecipe) {
        return (
            <div className="emptyDetailsView">
                Please select a recipe to see its details.
            </div>
        );
    }

    const { title, description, photo, tags = [], chef } = selectedRecipe;

    return (
        <div className="detailsView">
            <img alt="" className="detailsViewPhoto" src={photo} />
            <div className="detailsViewTitle">{title}</div>
            <ul className="detailsViewTags">
                {tags.map((tag, index) => (
                    <li key={index} className="detailsViewTagsItem">
                        {tag}
                    </li>
                ))}
            </ul>
            <div className="detailsViewDescription">{description}</div>
            {chef && <div className="detailsViewChef">{`by Chef ${chef}`}</div>}
        </div>
    );
}

export default DetailsView;
