import React from "react";
import { useRouter } from 'next/router'
import { gql, useQuery } from "@apollo/client";
import dayjs from "dayjs";

const TICKET_QUERY = gql`
query($id:ID){
  ticket(where: {
    id: $id
  }){
    subject
    submitedOn
    submittedBy {
      name
      department {
        name
      }
    }
    post{
      document
    }
  }
}
`


const TicketPage = (props) => {
    const router = useRouter()
    const id = router.query.pd

    const {data, loading, error} = useQuery(TICKET_QUERY, {
      variables: {id: id},
      pollInterval: 5000
    })
    if (loading) {
      return (<p>Loading....</p>)
    } else if (data) {
      return (
              <div className="bg-white shadow-md rounded my-6">
                    {data.ticket ? 
                    <div className="flex flex-col flex-wrap p-6">
                    <div className="grow">
                      <h1 className="font-display text-2xl font-bold">
                          {data.ticket.subject}
                      </h1>
                      </div>
                      <div className="grow text-left">
                          <small>Submitted by 
                              <span className=""> {data.ticket.submittedBy.name}</span> 
                          </small>
                          <br />
                          <small>
                            Submitted On {dayjs(data.ticket.submitedOn).format("MM-DD-YYYY")}
                          </small>
                          {data.ticket.post ?
                             data.ticket.post.document.map((module) => {
                              return module.children.map((c) => {
                                return <p key={c.text}> {c.text} </p>
                              })
                            })
                                
                          : null}
                        
                      </div>
                    </div>
                    : null }
                
                  
              </div>
      )
      }
    }

   

export default TicketPage