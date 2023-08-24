import actionTypes from '../actionTypes/actionTypes'

const sideBar=()=>{
    return{
        type: actionTypes.SIDE_BAR,
        payload:null
    }
}

const viewMode=(value)=>{
    switch(value){
        case 'light':
            return{
                type: actionTypes.VIEW_MODE_LIGHT,
                payload:null
            }
        case 'dark':
            return{
                type: actionTypes.VIEW_MODE_DARK,
                payload:null
            }
        case 'auto':
            return{
                type: actionTypes.VIEW_MODE_AUTO,
                payload:null
            }
        default:
            return{
                type: actionTypes.VIEW_MODE_LIGHT,
                payload:null
            }
    }  
}

const viewLanguage=(value)=>{
    switch(value){
        case 'vi':
            return{
                type:actionTypes.VIEW_LANGUAGE_VI,
                payload:null
            }
        case 'en':
            return{
                type: actionTypes.VIEW_LANGUAGE_EN,
                payload:null,
            }
        default:
            return{
                type: actionTypes.VIEW_LANGUAGE_EN,
                payload:null,
            }
    }
}

const viewActions={
    sideBar,
    viewMode,
    viewLanguage,
}

export default viewActions