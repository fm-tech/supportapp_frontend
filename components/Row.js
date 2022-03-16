import React from "react";

import Column from "./Column";

const Row = (props) => {
   
    const keys = Object.keys(props)

    return (
                <tr className="hover:bg-grey-lighter">
                    {keys.map((prop) => {
                         return <Column key={prop} props={props[prop]} />
                    })}
                </tr>
    )
}

export default Row