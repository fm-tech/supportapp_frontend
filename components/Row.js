import React from "react";
import Link from 'next/link'
import Column from "./Column";

const Row = (props) => {

    // console.log(props)
    let id = props.ticketId   
    const keys = Object.keys(props)
    console
    

    return (
        <Link href={id ? `/ticket/${id}` : ''} passHref>
            <tr  >
                {keys.map((prop) => {
                if (prop != 'ticketId'){
                    return <Column key={prop} props={props[prop]} />
                }
                })}
            </tr>
        </Link>
    )
}

export default Row