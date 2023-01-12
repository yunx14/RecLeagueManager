import { useState } from "react";

const FilterList = () => {
    const [filterText, SetFilterText] = useState('');
    const fruits = ['Apples', 'Bananas', 'Pears', 'Kiwis', 'Grapes', 'Watermelon', 'Oranges', 'Peaches'];

    function handleFilterChange(e) {
        SetFilterText(e.target.value);
    }

    function filterFruit(fruit) {
        return fruit.toLowerCase().includes(filterText.toLocaleLowerCase());
    }

    return (
        <>
            <input type="text" id='fruitfilter' value={filterText} onChange={handleFilterChange}></input>

            <ul>
                {fruits.filter(filterFruit).map(fruit => <li key={fruit}>{fruit}</li>)}
            </ul>
        </>
        
    )
}

export default FilterList;