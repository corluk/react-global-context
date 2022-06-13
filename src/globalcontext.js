import React  from "react"; 

const GlobalContext = React.createContext() 


const useGlobalContext = ()=>{


    const context = React.useContext(GlobalContext)
    

}
const GlobalState = {}
const state = {
    addState : (name , reducer)=>{

            GlobalState[name] = 
    }
}
const GlobalStateProvider 