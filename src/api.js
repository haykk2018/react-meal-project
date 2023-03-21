import {API_URL, CAT_URL} from "./config";

const getAllCategories = async () => {
    const res = await fetch(CAT_URL);
    return await res.json();
};

const getMealById = async (id) => {
    const res = await fetch(API_URL + "" + id, {mode: "cors",headers: {
            Authorization: "1"
        }});
    return await res.json();
};

export {getAllCategories, getMealById}
