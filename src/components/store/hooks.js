import { useContext } from "react";
import Context_cre from "./Context";

export const useStore = () => {
    const [state, dispatch] = useContext(Context_cre)

    return [state, dispatch]
}