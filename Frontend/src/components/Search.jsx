function Search({ data, setFilterData }) {
    function handleSearch(text) {
        const filterData = data.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilterData(filterData);
    }

    return (
        <div >
            <input
                className="border rounded-2xl p-2 mx-4"
                type="text"
                placeholder="Search restaurants..."
                onChange={(e) => handleSearch(e.target.value)}
            />

        </div>
    );
}

export default Search;
