import React from "react";
import { render } from "@testing-library/react";
import DetailsView from "../DetailsView";

test("renders empty message view", () => {
    const { getByText } = render(<DetailsView />);
    const messageElement = getByText(
        "Please select a recipe to see its details."
    );
    expect(messageElement).toBeInTheDocument();
});

test("renders details of selected recipe", async () => {
    const selectedRecipe = {
        title: "Delicious Food",
        description: "Delicious Food description",
        photo: "http://delicious.com/food.jpg",
        tags: ["meat", "grill"],
        chef: "Yusuf Seyrek",
    };

    const { container } = render(
        <DetailsView selectedRecipe={selectedRecipe} />
    );

    const titleElement = container.querySelector(".detailsViewTitle");
    expect(titleElement.innerHTML).toBe("Delicious Food");

    const descriptionElement = container.querySelector(
        ".detailsViewDescription"
    );
    expect(descriptionElement.innerHTML).toBe("Delicious Food description");

    const photoElement = container.querySelector(".detailsViewPhoto");
    expect(photoElement.src).toBe("http://delicious.com/food.jpg");

    const tagElements = container.querySelectorAll(".detailsViewTagsItem");
    expect(tagElements.length).toBe(2);
    expect(tagElements[0].innerHTML).toBe("meat");
    expect(tagElements[1].innerHTML).toBe("grill");
});
