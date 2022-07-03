import React, { useState } from "react";
import Card from "./UI/Card";
import UserInput from "./Components/UserInput";
import UserList from "./Components/UserList";

const App = () => {
  const [userData, setUserData] = useState([]);

  const dataSubmitHandler = (userName, userAge) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <UserInput onDataSubmit={dataSubmitHandler} />
      <UserList list={userData} />
    </div>
  );
};

export default App;
