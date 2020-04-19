import { actionType } from "./typeAction";
import Axios from 'axios';

export const fetchSendMessage = (msg) =>{
    
    return (dispatch) => {
        dispatch(request())
        Axios({
            method:'POST',
            url:'/api/msg/send',
            baseURL:'http://katuishi.ddns.net:5000/',
            headers : {'Content-Type':'application/json'},
            responseType:'json',
            data:msg
        })
        .then((respose)=>
            dispatch(success(msg))
        ).catch((error)=>{
            dispatch(failure(true))
        })
    }
}


export const fetchReceiveMessage = _ =>{
    
    return (dispatch) => {
        dispatch(request())
        Axios({
            method:'GET',
            url:'/api/msg/receive',
            baseURL:'http://katuishi.ddns.net:5000/',
            headers : {'Content-Type':'application/json'},
            responseType:'json'
        })
        .then((respose)=>{
            dispatch(successSend(respose.data))
        }).catch((error)=>{
            // dispatch(failure(true))
        })
    }
}

const successSend = (data) =>({
    type:actionType.FETCH_GET_MSG_SUCCESS,
    payload:data
})

const success = (data) =>({
        type:actionType.FETCH_SEND_MSG_SUCCESS,
        payload:data
})

const request = _ =>({
        type:actionType.FETCH_SEND_MSG_REQUEST
        
})

const failure = (error) =>({
        type:actionType.FETCH_SEND_MSG_FAILURE,
        payload:error
})