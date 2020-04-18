import  {actionType}  from "./typeAction";



const initChatState = {

    message:{

        data:[],
        loading:false,
        error:false

    },

    user:"sick"
}

function getNewMessage(newData,oldData)
{
    var exit = false
    var result = []
    

        for (let i = 0; i < newData.length; i++) {

            exit = true
            for (let x = 0; x < oldData.length; x++) {
            
                if(newData[i].id === oldData[x].id)
                {
                    exit = false
                    break
                }
                
            }   

            if(exit){
                result.push(newData[i])
            }
        
}
    return result

}

export const chatReducer = (state = initChatState,action)=>{
    switch (action.type) {
        
        case actionType.SIGN_UP_USER:
            return{
                ...state,
                user:action.user
            }

        case actionType.FETCH_SEND_MSG_FAILURE:

            return{
                ...state,
                message:{
                    data:[...state.message.data],
                    loading:false,
                    error: action.payload
                }
            }

        case actionType.FETCH_SEND_MSG_REQUEST:
            return{
                ...state,
                message:{
                    data:[...state.message.data],
                    loading: true,
                    error:false   
                }  
            }

        case actionType.FETCH_SEND_MSG_SUCCESS:
    
            return{
                ...state,
                message:{
                    data: [...state.message.data],
                    loading: false,
                    error: false}

                     
            }

        case actionType.FETCH_GET_MSG_SUCCESS:
            if(state.message.data.length !== 0 && action.payload.length !== 0){
                return{
                    ...state,
                    message:{
                        data: state.message.data.concat(getNewMessage(action.payload,state.message.data)),
                        loading:false,
                        error:false
                    }
                }
            }
            else if(state.message.data.length === 0 && action.payload.length !== 0)
            {
                return{
                    ...state,
                    message:{
                        data: state.message.data.concat(action.payload),
                        loading:false,
                        error:false
                    }
                }
            }
            else if (action.payload.length === 0 || state.message.data.length === 0) {
                return{
                    ...state, 
                }
            }
            break
        default:return state;
    }
}