const Search = ({filter}) => {

// const [searchValue,setSearchValue]=useState([]);

    return <div className='row'>
        <div className='input-field col s12'>
            <input
                type='search'
                id='search-field'
                placeholder='search'
                // onKeyDown={handleKey}
                // onChange={(e) => setSearchValue(e.target.value)}
                onChange={(e) => filter(e.target.value)}
                // value={value}
            />
            <button
                className='btn'
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                // onClick={handleSubmit}
            >
                Search
            </button>
        </div>
    </div>
}

export {Search}