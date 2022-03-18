import React, {useState} from "react";
import Image from 'next/image'
import Link from 'next/link'



const Question = () => {
    const [selection, setSelection] = useState('')  
    
    const myLoader = ({ src, width, quality }) => {
        return `https://api.lorem.space/image/${src}`
      }

    const handleChange = (e) => {
        setSelection(e.target.value)
    }

    return (
        <section>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">We are here to help</h2>
                <p>What department do you need help from?</p>
                <div className="card-actions justify-end">
                <select value={selection} 
                onChange={handleChange}
                className="select select-ghost w-full max-w-xs">
                    <option disabled defaultValue>Chose department</option>
                    <option value="IT">IT</option>
                    <option value="QC">Aaron</option>
                    <option value="">Not sure</option>
                </select>
                <Link href={`/ticket/submit?dept=${selection}`}> 
                    <a href="#">
                        <button className="btn btn-primary">Get Help</button>
                    </a>
                </Link>
                
                </div>
            </div>
            </div>
        </section>
    )
}

export default Question