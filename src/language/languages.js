import { useSelector } from "react-redux";
import vi from "./languages/vi"
import en from "./languages/en"

// console.log(vi,en);

const Lang = () => {
    switch(useSelector(state => state.view.viewLanguage)){
        case 'vi':
            return vi;
        case 'en':
            return en;
        default:
            return en;
    }
}

export default Lang