
import React, { useEffect, useState } from "react";
const HOC = (WrappedComponenet, entity) => {
    function New(){


 const [data, setdata] = useState([]);
    const [term, setterm] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/${entity}`
            );
            const json = await res.json();
            setdata(json)
            console.log("data", data)
        };
        fetchData();
    }, [])
    let filteredData =data && data.slice(0, 10).filter((d) => {
        if (entity === "users") {
            console.log("d", d)

            const { name } = d;
            console.log("name", name)
            console.log("term", term)
            console.log(" name.indexOf(term)", name.indexOf(term))
            console.log("name.indexOf(term) >= 0", name.indexOf(term) >= 0)
            return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
            const { title } = d;
            return title.indexOf(term) >= 0;
        }
    })

    return (
        <div>
            <h2>{entity}</h2>
            <input
                type="text"
                value={term}
                style={{ border: "1px solid black", fontSize: "25px" }}
                onChange={(e) =>
                    setterm(e.target.value)
                }
            />
            <WrappedComponenet data={filteredData}></WrappedComponenet>
        </div>
    );
}

return New;

}

export default HOC;