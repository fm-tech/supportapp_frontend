import React from "react";

import Column from "./Column";

const Row = (props) => {
   
    const keys = Object.keys(props)

    return (
                <tr>
                    {keys.map((prop) => {
                         return <Column key={prop} props={props[prop]} />
                    })}
                </tr>
    )
}

export default Row