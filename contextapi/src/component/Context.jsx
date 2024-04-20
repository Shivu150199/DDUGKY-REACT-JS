import { createContext ,useState} from 'react'

export let Context = createContext()

const ContextProvider = ({ children }) => {
  //app
  let [count, setCount] = useState(0);

  return <Context.Provider value={10}>{children}</Context.Provider>
}

export default ContextProvider
