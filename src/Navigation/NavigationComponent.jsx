import React from 'react'
import { Link, Outlet } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <div>
      <nav>
       <ul>
       <li>
           <Link to="/">UseState</Link>
         </li>
         <li>
           <Link to="/useReducer">UseReducer</Link>
         </li>
         <li>
           <Link to="/useContext">UseContext</Link>
         </li> 
         <li>
           <Link to="/useRef">Use Ref</Link>
         </li> 
         <li>
           <Link to="/useEffect">UseEffect</Link>
         </li>
         <li>
           <Link to="/useLayoutEffect">UseLayoutEffect</Link>
         </li>
         <li>
           <Link to="/useMemo">UseMemo</Link>
         </li>
         <li>
           <Link to="/useCallback">UseCallback</Link>
         </li>
         <li>
           <Link to="/customHook">CustomHook</Link>
         </li>
       </ul>
     </nav>
     <Outlet></Outlet>
    </div>
  )
}

export default NavigationComponent
