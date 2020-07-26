import * as contentful from 'contentful';
import simplifyRecipesResponse from './simplifyRecipesResponse';

const client = contentful.createClient({
    space: "kk2bw5ojx476",
    accessToken: "7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c"
});

const fetchRecipes = () => client.getEntries({
    content_type: 'recipe'
}).then(simplifyRecipesResponse);

export { fetchRecipes };