import {useEffect, useState} from "react";
import {CategoryList} from "./CategoryList";
import {getAllCategories} from "../api";

const Main = () => {

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
        });
    }, []);

    return <>
        <main className='container content'>
        <CategoryList catalog={catalog}/>
        </main>
    </>
}

export default Main