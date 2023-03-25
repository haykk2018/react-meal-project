import {useEffect, useState} from "react";
import {CategoryList} from "./CategoryList";
import {getAllCategories} from "../api";
import {Search} from "./Search";

const Main = () => {

    const [catalog, setCatalog] = useState([]);
    //it's need because if we save filtered data in catalog, next filtering it will do from already filtered data
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            filter('');
        });
    }, []);

    const filter = (name) => {

        setFilteredCatalog(
            catalog.filter((item) => item.strCategory.toLowerCase().includes(name.toLowerCase()))
        )

    }

    return <>
        <main className='container content'>
            <Search filter={filter}/>
            <CategoryList catalog={filteredCatalog}/>
        </main>
    </>
}

export default Main