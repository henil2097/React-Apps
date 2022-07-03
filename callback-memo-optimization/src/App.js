import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [title, setTitle] = useState('Demo Project');

  console.log("App Running!!!");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  const titleHandler = useCallback(() => {
    setTitle("React Optimization Demo");
  }, []);

  const listItems = useMemo(() => [5, 2, 1, 3, 4], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}> Allow Toggle </Button>
      <Button onClick={toggleParagraphHandler}> Toggle Paragraph </Button>
      <Button onClick={titleHandler}> Set Title </Button>
      <DemoList title={title} items={listItems} />
    </div>
  );
}

export default App;

/*  
  If we hardcode the show prop as false/true, 
  then DemoOutput wont be re-rendered on the dom as there is no state/prop/context change.
  But when we click on Toggle Paragraph button, the DemoOutput component will be re-evaluated and re-executed
  because of App component gets re-evalauted as state got changed. And if DemoOutput has child Components then
  they will also be re-evaluated unnecessary even if they wont make any change to the dom.
  So, to optimize this re-evaluation, we need to use React.memo()

  Now, React.memo() will compare the new and the previous props value and check if they are same or not.
  If same then it wont re-evaluate the function/component.

  But, in javascript method or arrays or objects can't be same. for eg: obj1 = {}, obj2 = {}. obj1 === obj2 => false
  So, everytime if we reference a method or object or array in props, on re-evaluation it consider as new prop value.
  Because of this, as we have wrapped Button component in React.memo(), it will get re-evaluated.

  To stop this re-evaluation for references as well, we need to use useCallback hook and wrap our function/reference.
  useCallback will store that wrapped function in react store and will re-use the same whenever needed. 

  There is similar hook to useCallback, that is useMemo which is used to memoise the data or store the data same as useCallback which stores the function


  useCallback - stores the function and re-create the function only if dependencies changes
  useMemo - stores the data and re-create the data only if the dependencies changes

  */
