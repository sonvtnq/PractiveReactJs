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

const viewActions={
    sideBar,
    viewMode,
}

export default viewActions