import React from 'react'
 let Count = (props) => {
    console.log("In Count Component")
    return (
        <div>
             <div>
                 {props.text} - {props.count}
             </div>
        </div>
    )
}

export default React.memo(Count)