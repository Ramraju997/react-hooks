import logo from "./logo.svg";
import "./App.css";
import StateHook from "./Hooks/StateHook";
import Counter from "./Hooks/UseReducerHook";
import UseContextHook from "./Hooks/UseContextHook";
import React, {createContext, useContext, useState} from "react";
import UseRefHook from "./Hooks/UseRefHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import UsememoHook from "./Hooks/UsememoHook";
import UseCallbackHook from "./Hooks/UseCallbackHook";
import CustomHook from "./Hooks/CustomHook/CustomHook";
import { Route, Routes } from "react-router-dom";
import NavigationComponent from "./Navigation/NavigationComponent";

export const counterContext = createContext(null);

export const CounterProvider = ({children}) => {
const [counter, setCounter] = useState(0);
const increment = ()=>{
  setCounter(counter+1);
}

return (
  <counterContext.Provider value={{ counter, increment }}>
      {children}
    </counterContext.Provider>
)
}



function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationComponent></NavigationComponent>}>
        <Route index element={<StateHook></StateHook>}></Route>
        <Route path="/useReducer" element={<Counter></Counter>}></Route>
        <Route path="/useContext" element={ <UseContextHook></UseContextHook>}></Route>
        <Route path="/useRef" element={  <UseRefHook></UseRefHook>}></Route>
        <Route path="/useEffect" element={ <UseEffectHook></UseEffectHook>}></Route>
        <Route path="/useMemo" element={ <UsememoHook></UsememoHook>}></Route>
        <Route path="/useCallback" element={ <UseCallbackHook></UseCallbackHook>}></Route>
        <Route path="/customHook" element={ <CustomHook></CustomHook>}></Route>
        </Route>
        
      </Routes>
     {/*  <StateHook></StateHook>
      
     
     
      
      
      
       */}
    </div>
  );
}

export default App;
