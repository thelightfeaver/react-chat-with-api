import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {  actionType} from "../Redux/typeAction";


export const Signup = (_) => {

  const dispatch = useDispatch()
  const history = useHistory()

  

  const signUpUser = (username) => dispatch(()=>{
    dispatch({
      type: actionType.SIGN_UP_USER,
      user:username
    })
  })

  const showAlert = _=> dispatch(()=>{
    dispatch({
      type: actionType.STATE_ALERT,
      payload:{
        title:"Check your username please!",
        visible: "visible"
      }
    })
  })



  const checkInWordObs = word =>{

    let listWord = ['mmgvo','mamaguebo','mmguebazo','m.m.g','mama.guebo']
    return !listWord.includes(word.toLowerCase())
    
  }

  const handleOnSubmit = (e) =>{

    e.preventDefault()
    let username  = e.target.username.value.trim()

    if(username && username.length > 4 && username.length < 18 && checkInWordObs(username))
    {
      signUpUser(username)
      localStorage.setItem('username',username)
      history.push('/chat')

    }
    else
    {
        showAlert()
    }

  }

  useEffect(()=>{
    const loadUsername = _ =>{
        let username = localStorage.getItem('username')
        if(username){
          signUpUser(username)
          history.push('/chat')
        }
      }

      loadUsername()

      window.addEventListener('beforeunload',loadUsername)

      return ()=>{
        window.removeEventListener('beforeunload',loadUsername)
      }
    })

  return (
    <form  onSubmit={(e)=> handleOnSubmit(e)} className="form-sign-up" >
      <p>Sign Up</p>
      <input name="username" minLength={"4"} maxLength = {"18"} placeholder="Type your nick" required/>
      <button>Sign Up</button>
    </form>  
  );
};
