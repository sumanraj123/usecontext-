import React,{useState} from "react";

let Usercontext= React.createContext();
export default Usercontext;



// This will provide a data to all its children ie(component)
export const Userprovider=({Children})=> {

    let [userList,setUserList]= useState([])

    return <Usercontext.Provider value={{userList,setUserList}}>
        {Children}
    </Usercontext.Provider>
}