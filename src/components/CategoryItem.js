const CategoryItem = (props) => {


    return <div className='card'>
        <div className='card-image'>
            <img src={props.strCategoryThumb} alt={props.strCategory}/>
        </div>
        <div className='card-content'>
            <span className='card-title'>{props.strCategory}</span>
            <p>{props.strCategoryDescription.slice(0, 60)}...</p>
        </div>
        <div className='card-action'>
            {/*<Link to={`/category/${strCategory}`} className='btn'>*/}
            {/*    Watch category*/}
            {/*</Link>*/}
        </div>
    </div>
}


export {CategoryItem}