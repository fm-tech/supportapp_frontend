import React from "react";


const TicketPage = (props) => {
   
    const keys = Object.keys(props)

    return (
           <div className="bg-white shadow-md rounded my-6">
               <div className="flex flex-col flex-wrap p-6">
                   <div className="grow">
                        <h1 className="font-display text-2xl font-bold">
                            Ticket Subject
                        </h1>
                   </div>
                   <div className="grow text-left">
                        <small>Submitted by 
                            <span className="">Person</span> 
                        </small>
                        <p className="font-primary text-base">
                            description
                        </p>
                   </div>

               </div>
           </div>
    )
}

export default TicketPage