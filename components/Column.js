import React from "react";

import dayjs from "dayjs";

const Column = (props) => {
    const display = props.props

    console.log()

    const getDisplay = () =>{
        if( typeof(display) === 'object'){
            if(display != null){
                if(display.__typename === 'User'){
                    return display.name
                }
            } else {
                return null
            }
        }
        else if( typeof(display) === 'string') {
            if(dayjs(display).isValid()){
                // return 'This is a sting'
                return dayjs(display).format("MM-DD-YYYY")
            }
            else {
                return display
            }
           
        }
       
}
    let displayVal = getDisplay()

    return (
                    <td className="py-4 px-6 border-b border-grey-light">
                     {displayVal}
                    </td>
    )
}

export default Column