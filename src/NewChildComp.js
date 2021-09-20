import React from 'react'
import {useContext} from 'react'
import {UserContext} from './Context'
export const NewChildComp = () => {


    const context = useContext(UserContext)
    console.log(context)
    return (
        <div>
          
             Child Component
        </div>
    )
}
