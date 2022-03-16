import { map } from "lodash";
import React from "react";

import Row from "./Row";

const Table = (props) => {
    
    const ticketLayout = [
        "Subject",
        "Time Submitted",
        "Submitted By"
    ]

    return (
        <div className="bg-white shadow-md rounded my-6">
            <table className="text-left w-full border-collapse">
                <thead>
                    <tr>
                        {ticketLayout.map((subhead) => {
                            return <th 
                            className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                            key={subhead}>
                                {subhead}
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tickets.map((ticket) => {
                            return <Row key={ticket.id}
                                subject={ticket.subject}
                                submitedOn={ticket.submitedOn}
                                submittedBy={ticket.submittedBy}
                                post={ticket.post}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
        
    )
}

export default Table