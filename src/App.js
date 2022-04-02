import React from "react";
import "./style.css"

export default function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        setThingsArray(prevItem => {
            return [...prevItem, `Thing ${prevItem.length + 1}`]
        })
    }
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div className="container">
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}