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
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        {ticketLayout.map((subhead) => {
                            return <th 
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
                                ticketId={ticket.id}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
        
    )
}

export default Table