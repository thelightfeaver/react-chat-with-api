import React from "react";
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

  const get_username = (e) =>{

    e.preventDefault()
    let username  = e.target.username.value.trim()

    if(username)
    {
      signUpUser(username)
      history.push('/chat')
    }else{
      alert('Check your username please!')
    }

  }
  return (
    <form  onSubmit={(e)=> get_username(e)} className="form-sign-up" >
      <p>Sign Up</p>
      <input name="username" minLength={"4"} maxLength = {"18"} placeholder="Type your nick" required/>
      <button>Sign Up</button>
    </form>  
  );
};
