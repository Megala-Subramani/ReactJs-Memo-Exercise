import React, {useState,useEffect} from 'react'
import { NewChildComp } from './NewChildComp'

// Hooks

// array destructring
 const FunctioanlComp = () => {

  const [Details,SetDetails] = useState({ Name : "", Age : ""})


useEffect(() => {

  console.log("I am in useEffect")
  
})

useEffect(() => {
  // ComponentDidMount method
  // API Call here

  console.log("I am in useEffect with blank array")
  
},[])


useEffect(() => {
  // ComponentDidMount method
  // API Call here

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {

       SetDetails({Details : json})

  })
  
},[])

// performance optimizarion : load compoments only when required --> lazy loading --> React.lazy--> 
// condtional Rendering --> JSX code you right a ternary operator and based on that you load component

useEffect(() => {
  
   console.log("Use Effect with dependnecy")
  return () => {
   // Componmennt will Unmount
  }
}, [Details])
  
 


// Error Boundaries --> 
// create a new class component
// 2 lifecycle methods --> getDerivedStateFromError  , ComponentWillReceiveError

    return (
      
        <div>
             <NewChildComp/>
        </div>
    )
}


export default FunctioanlComp