import React ,{useContext} from 'react'
import { UserContext} from './Context'


export const MyNewComp = () => {

    const context = useContext(UserContext)
    debugger;
    console.log(context)
    return (
        <div> 
             Welcome {context.Name}
        </div>
    )
}
