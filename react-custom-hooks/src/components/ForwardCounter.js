import useCounter from '../hooks/useCounter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter();
  
  return <Card>{counter}</Card>;
};

export default ForwardCounter;

/*  Move the following logic to useCounter custom hook(just another function). 
    The state in custom-hooks gets tightly bind to the function components which ever is using that hook.
const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
*/