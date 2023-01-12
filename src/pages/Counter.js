import { useState } from "react";

const Counter = () => {
    const [clicked, setClicked] = useState(0);

    function handleAdd() {
        setClicked(clicked+1);
    }
    function handleSubtract() {
        setClicked(clicked-1);
    }
    return (
        <>
            <div>{clicked}</div>
            <button onClick={handleSubtract}>-</button>
            <button onClick={handleAdd}>+</button>
        </>
    )
}

export default Counter;