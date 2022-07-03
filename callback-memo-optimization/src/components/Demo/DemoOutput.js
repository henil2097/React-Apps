import React from "react";

const DemoOutput = (props) => {
    console.log("Demo Output Running!!!");
    return <p>{props.show ? 'This is new Paragraph!' : ''}</p>
}

export default React.memo(DemoOutput);

