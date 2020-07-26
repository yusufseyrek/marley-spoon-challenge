function simplifyRecipesResponse(response) {
    return response.items.map((recipe) => ({
        title: recipe.fields.title,
        description: recipe.fields.description,
        photo: recipe.fields.photo.fields.file.url,
        tags: recipe.fields.tags?.map((tag) => tag.fields.name),
        chef: recipe.fields.chef?.fields.name,
    }));
}

export default simplifyRecipesResponse;
