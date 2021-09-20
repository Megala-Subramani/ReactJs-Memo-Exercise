import React, { useState,useCallback } from 'react'
import ButtonComp from './ButtonComp'
import Count from './Count'

export const POHooks = () => {

    const [Age, IncreaseAge] = useState(40)
    const [Sal, IncreaseSal] = useState(20000)



    const IncAge = useCallback(() => {
        IncreaseAge(Age + 1)
    },[Age])


    let IncSal = useCallback(() => {
        IncreaseSal(Sal + 10000)
    },[Sal]);


    // header footer --> it was only presentation purpose--
    // 

    //it provides referential equality and 
    return (
        <div>
            <Count text="Age" count={Age} />
            <ButtonComp handleClick={IncAge}> Increase Age </ButtonComp>
            <Count text="Sal" count={Sal} />
            <ButtonComp handleClick={IncSal}> Inrease Sal </ButtonComp>
        </div>
    )
}
