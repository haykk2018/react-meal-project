import {useEffect, useState} from "react";
import {CategoryList} from "./CategoryList";
import {getAllCategories} from "../api";
import {Search} from "./Search";
import {useLocation, useNavigate} from "react-router-dom";

const Main = () => {

    const [catalog, setCatalog] = useState([]);
    //it's need because if we save filtered data in catalog, next filtering it will do from already filtered data
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const {search} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            const nameFromLink = search ? search.split('=')[1].toLowerCase() : '';
            // we pass here names as argument because it can't take catalog from useEffect hook
            filter(nameFromLink, data.categories);
        });
    }, []);

    const filter = (name, names = catalog) => {
        setFilteredCatalog(
            names.filter((item) => item.strCategory.toLowerCase().includes(name.toLowerCase()))
        );
        name && navigate('?search=' + name);
    }

    return <>
        <main className='container content'>
            <Search filter={filter}/>
            <CategoryList catalog={filteredCatalog}/>
        </main>
    </>
}

export default Main