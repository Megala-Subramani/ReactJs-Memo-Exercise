export function AcceptNameFromUser(Name){
    return{
        type : "AcceptName",
        UserName : Name
    }
}


export function GetUser(){

       return (function(){ console.log("Welcome")})
    
    
    
}


export function GetUserSuccess(User){
    return{
        type : "Success",
        UserName : User
    }
}


export function GetUserFail(Err){
    return{
        type : "Fail",
        ErrorMsg : Err
    }
}