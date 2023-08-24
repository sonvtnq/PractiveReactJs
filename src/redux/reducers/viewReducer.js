import actionTypes from "../actionTypes/actionTypes";
const initSate={
    sideBarIsOpen:true,
    viewMode:'light',
    viewLanguage:'en',
}

const ViewReducer=(state=initSate,action)=>{
    switch(action.type){
        //Chỉnh viewLanguage
        case actionTypes.VIEW_LANGUAGE_EN:
            return{
                ...state,
                viewLanguage:'en',
            }
        case actionTypes.VIEW_LANGUAGE_VI:
            return{
                ...state,
                viewLanguage:'vi',
            }

        //Chỉnh viewMode
        case actionTypes.VIEW_MODE_LIGHT:
            return{
                ...state,
                viewMode:'light',
            }
        case actionTypes.VIEW_MODE_DARK:
            return{
                ...state,
                viewMode:'dark',
            }
        case actionTypes.VIEW_MODE_AUTO:
            return{
                ...state,
                viewMode:'auto',
            }

        //Side bar
        case actionTypes.SIDE_BAR:
            return {
                ...state,
                sideBarIsOpen:!state.sideBarIsOpen,
            }
        default:
            return state;
    }
}   

export default ViewReducer