import React from "react";

export const Signup = (_) => {
  return (
    <form className ="form-sign-up" onSubmit={"return false"}>
      <p>Sign Up</p>
      <input minLength={"4"} maxLength = {"18"} placeholder="Type your nick" required/>
      <button>Sign Up</button>
    </form>  
  );
};
