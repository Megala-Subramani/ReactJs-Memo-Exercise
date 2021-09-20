import React from 'react'

 let ButtonComp = ({handleClick,children}) => {
     console.log("ButtonComp rendering")
    return (
          
        <div>
            <button onClick ={handleClick}>
                    {children}
            </button>     
        </div>
    )
}


export default React.memo(ButtonComp)
