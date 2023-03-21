import {CategoryItem} from "./CategoryItem";

const CategoryList = (props) => {

    return <>
        <div className='list'>
            {
                props.catalog.map((i, index) => (
                    <CategoryItem key={index} {...i}/>
                ))
            }
        </div>
    </>
}


export {CategoryList};