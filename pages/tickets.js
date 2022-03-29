import React from "react";

import { gql, useQuery } from "@apollo/client";

import Table from "../components/Table";

const TICKETS_QUERY = gql`
query{
  tickets{
  	id,
    submitedOn,
    submittedBy{
      name
    },
    assignedTo{
      name
    },
    subject,
    post{
      document,
    }
  }
}
`


export default function Tickets() {

    const {data, loading, error} = useQuery(TICKETS_QUERY)
    // console.log(data)
    return (
        <section>   
            <h1 className="font-display text-3xl font-bold">
                Ticket List
            </h1>
            <section>
                {data ? <Table tickets={data.tickets} />
                 : "Loading..."}
            </section>
        </section>

    )
  }

