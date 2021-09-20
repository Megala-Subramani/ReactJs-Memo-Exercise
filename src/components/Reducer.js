


const InitialState = {
    Name : "Aadesh"
}


export function FirstReducer(state=InitialState,action){
  
    
    const newState = {...InitialState}
    if(action.type=="AcceptName"){
           newState.Name = action.UserName
           return newState
    } 

    if(action.type=="Success"){
        debugger;
        console.log(action.UserName)
    }
    if(action.type=="Fail"){
        debugger;
        console.log(action.ErrorMsg)
    }

    return state
}