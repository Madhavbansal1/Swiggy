import { useEffect, useState } from 'react';
import ApiCalling from './ApiCalling'
import RestaurantsCard from './RestaurantsCard';
import Search from './Search';
function Body() {
    const data = ApiCalling();

    const [filterData, setFilterData] = useState(data);
    const [Active1, setActive1] = useState(false);
    const [Active2, setActive2] = useState(false);

    function filterByRating() {
        const filtered = data.filter((restaurant) => restaurant.info.avgRating >= 4.5);
        setFilterData(filtered);
        setActive1(true);
        setActive2(false);
    }

    function resetFilter() {
        setFilterData(data);
        setActive1(false);
        setActive2(true);

    }

    useEffect(() => {
        if (data && data.length > 0) {
            setFilterData(data);

        }
    }, [data])
    return (
        <>
            <div className="ml-20 mt-4">
                <h1 className="text-2xl mb-4">
                    Restaurants with online food delivery in <span className="text-indigo-900 font-bold">Mathura</span>
                </h1>
                <div className='flex items-center justify-center mb-4'>
                <button
                    onClick={filterByRating}
                    className={`${Active1 ? "border rounded-2xl p-2 mx-4 bg-indigo-900 text-white" : "border rounded-2xl p-2 mx-4 hover:bg-indigo-900 hover:text-white"}`}
                >
                    Rating 4.5
                </button>

                <button
                    onClick={resetFilter}
                    className={`${Active2 ? "border rounded-2xl p-2 mx-4 bg-indigo-900 text-white" : "border rounded-2xl p-2 mx-4 hover:bg-indigo-900 hover:text-white"}`}
                >
                    Reset
                </button>

                <Search data = {data} setFilterData = {setFilterData}/>
                </div>
                

            </div>

            <RestaurantsCard restArr={filterData} />


        </>
    );
}

export default Body;
