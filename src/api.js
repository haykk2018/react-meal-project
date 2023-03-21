import {API_URL, CAT_URL} from "./config";

const getAllCategories = async () => {
    const res = await fetch(CAT_URL);
    return await res.json();
};

const getRecipeById = async (id) => {
    const res = await fetch(API_URL + '/api/json/v1/1/lookup.php?i=' + id);
    return await res.json();
};

const getCategoryMeals = async (catName) => {
    const response = await fetch(API_URL + '/api/json/v1/1/filter.php?c=' + catName);
    return await response.json();
};

export {getAllCategories, getRecipeById, getCategoryMeals}
