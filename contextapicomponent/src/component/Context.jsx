import { createContext, useState } from "react";

export let Context=createContext('')


let ContextProvider=({children})=>{
    let [count,setCount]=useState(0)

let name='devilal'

    return <Context.Provider value={{count,name}}>

        {children}
    </Context.Provider>
}

export default ContextProvider;