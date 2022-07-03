import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();

  // const [userName, setUserName] = useState('');
  // const [userAge, setUserAge] = useState('');

  // const userNameHandler = (event) => {
  //     setUserName(event.target.value)
  // }
  // const userAgeHandler = (event) => {
  //     setUserAge(event.target.value);
  // }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onDataSubmit(nameRef.current.value, ageRef.current.value);
    nameRef.current.value = ""; // avoid manipulating dom with the ref object.
    ageRef.current.value = "";
    // props.onDataSubmit(userName, userAge);
    // setUserName('');
    // setUserAge('');
  };
  return (
    <Card>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <label> UserName </label>
        {/* value and onChange is required when useState is used to manage input state. 
            If useRef is used, we get the actual dom element to read the value */}
        {/* <input type='text' value={userName} onChange={userNameHandler}></input> */}

        <input type="text" ref={nameRef}></input>
        <label> Age </label>

        {/* <input type='number' value={userAge} onChange={userAgeHandler}></input> */}
        <input type="number" ref={ageRef}></input>
        <button type="submit"> Submit </button>
      </form>
    </Card>
  );
};

export default UserInput;
