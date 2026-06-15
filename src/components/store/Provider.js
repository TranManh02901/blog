import { useReducer } from "react";
import Context_cre from "./Context";
import Reducer_fnc, { initState } from "./Reducer";

function Provider_cre({ children }) {
    const [state, dispatch] = useReducer(Reducer_fnc, initState)
    // const value = [state, dispatch]

    return (
        <Context_cre.Provider value={[state, dispatch]} >
            {children}
        </Context_cre.Provider >
    )
}

export default Provider_cre