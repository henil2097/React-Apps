import React, { useMemo } from "react";

const DemoList = (props) => {
    const { items } = props;
    const sortedList = useMemo(() => { 
        console.log("Sorted List");
        return items.sort((a,b) => a-b);
    }, [items]);
    console.log("DemoList Running!!!");
    return <div>
        <h2>{props.title}</h2>
        <ul>{sortedList.map((item,index) => <li key={index}>{item}</li>)}</ul>
    </div>
}

export default React.memo(DemoList);
