import  {actionType}  from "./typeAction";



const initChatState = {

    message:{

        data:[{
            user:'looo',
            text:'Almost before we knew it, we had left the ground.'
        },
        {
            user:'hello',
            text:'lol'
        }],
        loading:false,
        error:false

    },

    user:"sick"
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
                    data: [...state.message.data,action.payload],
                    loading: false,
                    error: false}

                     
            }

        case actionType.FETCH_GET_MSG_SUCCESS:
            return{
                ...state,
                message:{
                    data: state.message.data.concat(action.payload),
                    loading:false,
                    error:false
                }
            }
        default:return state;
    }
}