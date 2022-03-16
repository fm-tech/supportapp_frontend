import React, {useState} from "react";
import { Form, Field } from 'react-final-form'

import {gql, useMutation } from '@apollo/client'

import Modal from "../../components/Modal";

// Define mutation
const INCREMENT_COUNTER = gql`
  # Increments a back-end counter and gets its resulting value
  mutation(
  $subject:String
  $post:JSON
  $requestFrom: String
  ){
    createTicket(data:{
        subject: $subject
        post: $post
        submittedBy:{
        connect: {
            email: $requestFrom
        }
        }
    }){
        id,
        subject
    }
}
`


const SubmitTicketPage = (props) => {
    const [mutateFunction, { data, loading, error }] = useMutation(INCREMENT_COUNTER);

    const [showModal, setShowModal] = useState(false)

    const keys = Object.keys(props)

    const onSubmit = () => {
        console.log('Event triggered')
        setShowModal(true)
    }

    return (
           <div className="bg-white shadow-md rounded my-6">
               <div className="py-4 px-6">
                   <h1 className="text-display text-2xl"
                   >Submit a new Ticket</h1>
                   <p>What is the issue you are having? We are here to help! 🤓 </p>
               </div>
               <div className="flex flex-col flex-wrap p-2">
                   <div className="grow">
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label htmlFor="subject" className="uppercase md:text-sm text-xs 
                            text-gray-500 text-light font-semibold">Subject</label>
                            <input 
                                className="py-2 px-3 rounded-lg border-2 border-primary-300 
                                mt-1 focus:outline-none focus:ring-2 focus:ring-primary-600 
                                focus:border-transparent" 
                                id="subject" type="text" autoFocus />
                        </div>
                    
                   </div>
                   <div className="grow">
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label htmlFor="email" className="uppercase md:text-sm text-xs 
                            text-gray-500 text-light font-semibold">Email</label>
                            <input 
                                className="py-2 px-3 rounded-lg border-2 border-primary-300 
                                mt-1 focus:outline-none focus:ring-2 focus:ring-primary-600 
                                focus:border-transparent" 
                                id="email" type="text" autoFocus />
                        </div>
                    
                   </div>
                   <div className="grow">
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label htmlFor="description" className="uppercase md:text-sm text-xs 
                            text-gray-500 text-light font-semibold">Description</label>
                            <textarea 
                                className="h-24 py-2 px-3 rounded-lg border-2 border-primary-300 
                                mt-1 focus:outline-none focus:ring-2 focus:ring-primary-600 
                                focus:border-transparent" 
                                id="description" type="text" autoFocus />
                        </div>
                   </div>
                   <div className="buttons flex flex-col flex-wrap p-6">
                        <button type="submit"
                            onClick={onSubmit}
                            className="text-center p-2 bg-blue-700 hover:bg-blue-400 rounded-md text-white"
                        >
                        Submit
                        </button>
                    </div>
               </div>
               {/* Show Modal */}
               {showModal ? (
                   <Modal />
               )
               : null}
           </div>
    )
}

export default SubmitTicketPage