import {useContext} from "react";

import {AppContext} from "../contexts";

const useGlobalContext = () => {
    return useContext(AppContext);
}

export default useGlobalContext;